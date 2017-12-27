import React from 'react';
import GuessButton from './guess-button';

export default class GuessForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    if(this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <label htmlFor="guess">Guess</label>&emsp;
          <input type="number" id="guess" name="guess" min="1" max="100" ref={input => (this.input=input)} required placholder="Enter your Guess"/>
        <GuessButton id="guessButton"/>
      </form>
    );
  }
}
