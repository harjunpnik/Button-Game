import React from 'react'
import axios from 'axios'

class Winners extends React.Component {
  constructor() {
    super()
    this.state = {
        winnerList: [],
        isLoading: true
    }
  }

  //  WHEN COMPONENT MOUN
  componentWillMount() {
    //  GETS THE WINNER NAMES AND SETS "winnerList" STATE TO THE WINNER NAMES
    axios
      .get('http://localhost:3001/winners')
      .then(response => {
        //  SETS STATE OF "winnerList" and "isLoading" TO FALSE
        this.setState({ 
          winnerList: response.data, 
          isLoading: false })
      })
  }

  render() {
    return (
    //  WHILE LOADING THIS SHOWS A LOADING SPINNER
    //  IF IT HAS LOADED IT WILL SHOW A LIST OF ALL THE WINNERS
    <div className="winnerPage">
      <div>
        <h1>Winners</h1>
      </div>
      <div>
      {this.state.isLoading && <div className="loadingSpinner">Loading...</div>}
      {!this.state.isLoading && (
        <ul>
          {this.state.winnerList.map((winner) =>
              <li key={winner.id}> { winner.name}</li>
          )}
        </ul>
      )}
      </div>
    </div>
      
    )
  }
}

export default Winners