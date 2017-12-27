import React from 'react';

import GuessForm from './guess-form';
import GuessList from './guess-list';
import GuessResult from './guess-result';

export default class GuessGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        guesses: [],
        randomNumber: Math.random()*100,
        feedback: 'Make your guess'
    };
  }

  makeGuess(guess) {
    guess = parseInt(guess,10);

    if(isNaN(guess)) {
      this.setState({feedback:'Please enter a valid number'});
      return;
    }

    const difference = Math.abs(guess - this.state.randomNumber);

    let feedback = '';

    if(difference>=30) {
      feedback = 'Cold'
    }
    else if (difference >=10) {
      feedback = 'Warm'
    }
    else {
      feedback = 'You got it!'
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    const guessCount = this.state.guesses.length;
    const {feedback, guesses} = this.state;

    return (
      <div className="guess">
        <h1>HOT or COLD</h1>
        <GuessResult feedback={feedback} guessCount={guessCount} />
        <GuessForm onMakeGuess={guess => this.makeGuess(guess)}/>
        <GuessList guesses={guesses} />
      </div>
    )
  }
}
