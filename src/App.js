import React from 'react'
import Winners from './components/winners'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      winners: [],
      winningClickNr: 0,
      newWinner: '',
      clicksToNextPrize: 0,
      clickAmount: 0
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
            }else if(this.state.clickAmount % 200 === 0){
              console.log("200 clicks prize")
            }
            else if(this.state.clickAmount % 100 === 0){
              console.log("100 clicks prize")
            }
        })
  }

  render() {
    return (
      <div>
        <h1>Button Game</h1>
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

export default App