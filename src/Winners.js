import React from 'react'
import axios from 'axios'

class Winners extends React.Component {
  constructor() {
    super()
    this.state = {
        winnerList: []
    }
  }

  componentWillMount() {
    console.log('will mount')
    axios
      .get('http://localhost:3001/winners')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        this.setState({ winnerList: response.data })
      })
  }

  onClickButton = () => {
    console.log("winners")
    console.log(this.state.winnerList)
  }


  render() {
    return (
      <div>
        <div>
          <h1>Winners</h1>
        </div>
        <div>
            {this.state.winnerList.map((winner) =>
                <li key={winner.id}> { winner.name}</li>
            )}
        </div>
      </div>
    )
  }
}

export default Winners