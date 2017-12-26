import React from 'react';

export default function GuessList(props) {
  const {guesses} = props;
  const guessesList = props.guesses.map((guess, index) =>
    <li key={index}>{guess}</li>
  );

  return (
    <ul className="guess-list">
        {guessesList}
    <ul>
  )
}
