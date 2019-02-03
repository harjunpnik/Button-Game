import React from 'react'
import axios from 'axios'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      winnerList: [],
      winningClickNr: 0,
      newWinnerName: '',
      prizeSize: '',
      clicksToNextPrize: 0,
      clickAmount: 0,
      showWinnerForm: false
    }
  }

  //  onClick of the "Try your luck" button the app will take the amount of clicks and increment it by 1, then update the amount of clicks 
  //  and lastly it will tell the player the amount of clicks to the next prize 
  onClickButton = () => {
    console.log("get ")
    axios
      .get('http://localhost:3001/clicks')
        .then(response => {
          console.log(response.data[0])
          this.setState({ clickAmount: response.data[0].clickAmount + 1})

          const amountObject = {
            clickAmount: this.state.clickAmount
          }

          console.log("put")
      
          axios
            .put('http://localhost:3001/clicks/1', amountObject)
            .then(response => {
              console.log(response)
            })

            this.setState({ clicksToNextPrize: 100 - (this.state.clickAmount % 100) })

            if(this.state.clickAmount % 500 === 0){
              console.log("500 clicks prize")
              this.setState({ 
                showWinnerForm: true,
                prizeSize: "BIG"
              })
            }else if(this.state.clickAmount % 200 === 0){
              this.setState({ 
                showWinnerForm: true,
                prizeSize: "MEDIUM"
              })
              console.log("200 clicks prize")
            }
            else if(this.state.clickAmount % 100 === 0){
              console.log("100 clicks prize")
              this.setState({ 
                showWinnerForm: true,
                prizeSize: "SMALL"
              })
            }
        })
  }

  sendForm = (event) =>{
    event.preventDefault()
    const winnerObject = {
      name: this.state.newWinnerName,
      prizeSize: this.state.prizeSize,
      winningClickNr: this.state.clickAmount

    }

    axios
      .post('http://localhost:3001/winners', winnerObject)
      .then(response => {
        this.setState({
          winners: this.state.winnerList.concat(response.data),
          newWinnerName: '',
          showWinnerForm: false
        })
      })
      
    
  }

  newWinnerOnChange = (event) => {
    //console.log(event.target.value)
    this.setState({ newWinnerName: event.target.value })
  }

  render() {
    if(this.state.showWinnerForm){
      return(
        <div>
          <div>
            <h1>Congratulations</h1>
          </div>
          <div>
           <p> Congratiulations. You have won a {this.state.prizeSize} prize</p>
           <p>Please enter your nickname:</p>
           <div>
             <form onSubmit={this.sendForm}>
              <input 
                value={this.state.newWinnerName}
                onChange={this.newWinnerOnChange}></input>
              <button type="submit">Send</button>
             </form>
           </div>
          </div>
        </div>
      )

    }
    return (
      <div>
        <div>
          <button onClick={this.onClickButton}>Try your luck</button>
        </div>
        <div>
          <p> Amount of total clicks: {this.state.clickAmount}</p>
          <p> Amount of clicks to next prize: {this.state.clicksToNextPrize}</p>
        </div>
      </div>
    )
  }
}

export default Game