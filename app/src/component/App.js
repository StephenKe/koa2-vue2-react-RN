/**
 * Created by sinowinner on 17/6/9.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../ui/Navigation'

class App extends Component {
    render() {
        return (
            <div className="App">
            <div className="App-header">
            <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
            <h2>Stephen.K</h2>
            </div>
                <Nav></Nav>
            </div>
    );
    }
}

export default App;