import React from 'react'

class Info extends React.Component {

  render() {
    return (
    <div className="infoPage">
      <div>
        <h1>Info</h1>
      </div>
      <p>The goal of the game is to click the button. 
        Every 100 clicks will win a prize. 
        Everyone is collectively increasing the counter. 
        You are not able to see on how many total clicks the counter is on,
        but after each click you will get to know how many clicks away from a prize you were. 
        There are 3 different prize sizes:
      </p>
      <ul>
        <li>100 clicks prize = Small prize</li>
        <li>200 clicks prize = Medium prize</li>
        <li>500 clicks prize = Big prize</li>
      </ul>

      <p>
        If you are the lucky winner of a prize you can enter your nickname and we will contact you later for your prize.
      </p>
    </div>
      
    )
  }
}

export default Info