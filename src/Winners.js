import React from 'react'


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
    fetch("/api/getWinners")
      .then(data => data.json())
      //  SETS STATE OF "winnerList" and "isLoading" TO FALSE
      .then(response =>{ this.setState({  
        winnerList: response.data, 
        isLoading: false })
      }
    )
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
            {this.state.winnerList.map((winners) => 
              <li key={winners.id}> { winners.Name}</li>
            )}
          </ul>
        )}
        </div>
      </div>  
    )
  }
}

export default Winners