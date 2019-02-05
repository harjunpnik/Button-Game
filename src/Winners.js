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

  componentWillMount() {
    console.log('will mount')
    axios
      .get('http://localhost:3001/winners')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        this.setState({ 
          winnerList: response.data, 
          isLoading: false })
      })
  }

  onClickButton = () => {
    console.log("winners")
    console.log(this.state.winnerList)
  }

  render() {
    return (
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