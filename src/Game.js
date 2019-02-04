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
      clicksToNextPrize: null,
      clickAmount: 0,
      showWinnerForm: false,
      buttonIsEnabled: false
    }
  }

  //  ONCLICK OF THE "Try your Luck" BUTTON, THE APP WILL TAKE THE AMOUNT OF CLICKS AND INCREMENT IT BY 1, THEN UPDATE THE AMOUNT OF CLICKS 
  //  TO THE DATABASE. IF THE PLAYER WOULD WIN A PRIZE, THEN THE PAGE WOULD CHANGE TO A FORM SO THAT THEY CAN LEAVE THEIR NICKNAME
  //  LASTLY IT WILL TELL THE PLAYER THE AMOUNT OF CLICKS TO THE NEXT PRIZE.
  onClickButton = () => {
    //console.log("get ")

    //  GET THE TOTAL AMOUNT OF CLICKS AND SET THE STATE OF "clickAmount" TO THAT VALUE + 1
    axios
      .get('http://localhost:3001/clicks')
        .then(response => {
          //console.log(response.data[0])
          this.setState({ clickAmount: response.data[0].clickAmount + 1})

          const amountObject = {
            clickAmount: this.state.clickAmount
          }

          //console.log("put")
      

           //  POSTS THE TOTAL AMOUNT OF CLICKS CLICKS TO THE DATABASE AND CHECK IF THE PLAYER WINS A PRIZE
          axios
            .put('http://localhost:3001/clicks/1', amountObject)
            .then(response => {
              //console.log(response)
            })

            //  CALCULATES AND SETS THE STATE OF THE "clicksToNextPrize" VARIAABLE
            this.setState({ clicksToNextPrize: 100 - (this.state.clickAmount % 100) })

            //  CHECKS IF THE PLAYER WINS A PRIZE AND SETS THE "showWinnerForm" TO TRUE SO THAT IT WILL BE RENDERED
            //  CHECKS IF THE PLAYER WINS A 500 CLICKS PRIZE
            if(this.state.clickAmount % 500 === 0){
              //console.log("500 clicks prize")
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
              //console.log("200 clicks prize")
            }
            //  CHECKS IF THE PLAYER WINS A 100 CLICKS PRIZE
            else if(this.state.clickAmount % 100 === 0){
              //console.log("100 clicks prize")
              this.setState({ 
                showWinnerForm: true,
                prizeSize: "SMALL"
              })
            }
        })
  }

  //  SENDS THE USER FORM TO THE DATABASE
  sendForm = (event) =>{
    event.preventDefault()
    //  THIS SAVES THE "name"(NICKNAME THAT USERS ENTER), "prizeSize" AND "winningClickNr"
    const winnerObject = {
      name: this.state.newWinnerName,
      prizeSize: this.state.prizeSize,
      winningClickNr: this.state.clickAmount

    }

    //  POSTS THE WINNER TO THE DATABASE AND RESETS VARIABLES
    axios
      .post('http://localhost:3001/winners', winnerObject)
      .then(response => {
        this.setState({
          winners: this.state.winnerList.concat(response.data),
          newWinnerName: '',
          showWinnerForm: false,
          clicksToNextPrize: null,
          buttonIsEnabled: false
        })
        
      })
      
    
  }

  //  ONCHANGE OF FORM, SETS STATE OF WINNER NAME AND PREVENTS USER FROM SENDING EMPTY
  newWinnerOnChange = (event) => {
    //console.log(event.target.value)
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
            <h1>Congratulations</h1>
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