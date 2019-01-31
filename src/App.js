import React from 'react'
import Game from './Game'
import Winners from './Winners'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Button Game</h1>
          <ul className="header">
            <li><Link to="/">The Game</Link></li>
            <li><Link to="/winners">Winners</Link></li>
          </ul>
          <Route exact path="/" component={Game} />
          <Route path="/winners" component={Winners} />

          <div className="pageContainer">

          </div>

        </div>
      </Router>
    )
  }
}

export default App