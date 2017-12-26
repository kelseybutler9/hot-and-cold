import React from 'react';
import GuessButton from './guess-button';
import GuessList from './guess-list';

export default function GuessForm(props) {
  onSubmit(e) {
    e.preventDefault();
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <div className="result">
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="guess">Guess</label>&emsp;
          <input type="number" id="guess" name="guess" min="1" max="100" ref={input => (this.input=input)} required placholder="Enter your Guess"/>
        <GuessButton id="guessButton"/>
      </form>
    );
}
