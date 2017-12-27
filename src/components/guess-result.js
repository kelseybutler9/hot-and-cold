import React from 'react';

export default function GuessResult(props) {
  const {feedback, guessCount} = props;
  let guessAgain;

  if(props.guessCount !== 0 && props.feedback !== "You got it!") {
      guessAgain = <span className="visuallyhidden">Guess again! </span>
  }

  return (
    <div class="feedback">
      {props.feedback} {guessAgain}
      <h2>
          Guess #{guessCount}!
      </h2>
    </div>
  );
}
