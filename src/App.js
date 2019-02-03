import React from 'react'
import Game from './Game'
import Winners from './Winners'
import Info from './Info'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/style.css';
import logo from './images/button.ico';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <div className="container">
              <div id="headerTitle">
              <Link to="/">
                <img src={logo} alt="Picture of a button" width="16%"/>
                <h1>Button Game</h1>
              </Link>
              </div>
              <nav>
                <ul>
                  <li><Link to="/">The Game</Link></li>
                  <li><Link to="/winners">Winners</Link></li>
                  <li><Link to="/info">Info</Link></li>
                </ul>
              </nav>
            </div>
          </header>
          <div className="container">
            <div className="pageContainer">
              <Route exact path="/" component={Game} />
              <Route path="/winners" component={Winners} />
              <Route path="/info" component={Info} />
            </div>

          </div>
        </div>
      </Router>
    )
  }
}

export default App