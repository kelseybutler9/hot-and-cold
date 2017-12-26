import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hot and Cold</h1>
        </header>
        <p className="App-intro">
          Guess a number between 1 and 100. THe system will notfiy you if it is hot(close) or cold(far) from the actual number. Keep guessing until you guess the correct number.
        </p>
      </div>
    );
  }
}

export default App;
