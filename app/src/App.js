import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import About from './component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './ui/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          <h2>Stephen.K</h2>
        </div>
        <Button></Button>
        <Router>
          <div>
            <ul>
              <li><Link to="/about">About</Link></li>
            </ul>

            <hr/>

            <Route path="/about" component={About}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
