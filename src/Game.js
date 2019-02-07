import React from 'react'
import axios from 'axios'


class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      winnerList: [],
      winningClickNr: 0,
      newWinnerName: '',
      prizeSize: '',
      clicksToNextPrize: null,
      clickAmount: 0,
      showWinnerForm: false,
      buttonIsEnabled: false
    }
  }

  onClickButton = () => {
    //  GET THE TOTAL AMOUNT OF CLICKS AND SET THE STATE OF "clickAmount" TO THAT VALUE + 1
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("/api/getClicks")
      .then(data => data.json())
      .then(response =>{ this.setState({ clickAmount: response.data[0].clickAmount })

        axios.post("/api/updateClicks", {
        update: { clickAmount: response.data[0].clickAmount + 1 }
        })
        .then(response => {
          //  CALCULATES AND SETS THE STATE OF THE "clicksToNextPrize" VARIAABLE
          this.setState({ clicksToNextPrize: 100 - (this.state.clickAmount % 100) })

          //  CHECKS IF THE PLAYER WINS A PRIZE AND SETS THE "showWinnerForm" TO TRUE SO THAT IT WILL BE RENDERED
          //  CHECKS IF THE PLAYER WINS A 500 CLICKS PRIZE
          if(this.state.clickAmount % 500 === 0){
            this.setState({ 
              showWinnerForm: true,
              prizeSize: "BIG"
            })
          //  CHECKS IF THE PLAYER WINS A 200 CLICKS PRIZE
          }else if(this.state.clickAmount % 200 === 0){
            this.setState({ 
              showWinnerForm: true,
              prizeSize: "MEDIUM"
            })
          }
          //  CHECKS IF THE PLAYER WINS A 100 CLICKS PRIZE
          else if(this.state.clickAmount % 100 === 0){
            this.setState({ 
              showWinnerForm: true,
              prizeSize: "SMALL"
            })
          }
        })
    })
  }

//  SENDS THE USER FORM TO THE DATABASE
sendForm = (event) =>{
  event.preventDefault()
  axios.post("/api/postWinner", {
    update: { id: this.state.clickAmount /100, Name: this.state.newWinnerName, prizeSize: this.state.prizeSize, winningClickNr: this.state.clickAmount }
  })
  this.setState({
    newWinnerName: '',
    showWinnerForm: false,
    clicksToNextPrize: null,
    buttonIsEnabled: false})
}

  //  ONCHANGE OF FORM, SETS STATE OF WINNER NAME AND PREVENTS USER FROM SENDING EMPTY
  newWinnerOnChange = (event) => {
    this.setState({ newWinnerName: event.target.value })
    if(event.target.value.length > 0){
      this.setState({buttonIsEnabled: true})
    }else{
      this.setState({buttonIsEnabled: false})
    }
  }

  render() {
    // IF THE "showWinnerForm" IS TRUE, THEN WE SHOW THE WINNER FORM, OTHERWISE WE SHOW THE GAME
    if(this.state.showWinnerForm){
      //  WINNERFORM
      return(
        <div className="gamePage">
          <div>
            <h1 id="congrats">Congratulations</h1>
          </div>
          <div>
           <p> Congratiulations. You have won a {this.state.prizeSize} prize</p>
           <p>Please enter your nickname:</p>
           <div>
             <form onSubmit={this.sendForm} >
              <input 
                value={this.state.newWinnerName}
                onChange={this.newWinnerOnChange}
              ></input>
              <button type="submit" disabled={!this.state.buttonIsEnabled} className={"submitButton" + (!this.state.buttonIsEnabled  ? "Disabled" : "Show")} >Send</button>
             </form>
           </div>
          </div>
        </div>
      )

    }
    //  THE GAME
    return (
      <div className="gamePage">
        <div>
          <h1>Button Game</h1>
        </div>
        <div>
          <button className="gameButton" onClick={this.onClickButton}>Try Your Luck</button>
        </div>
        <div>
          <p> Amount of clicks to next prize: {this.state.clicksToNextPrize}</p>
        </div>
      </div>
    )
  }
}

export default Game