import React, { useState } from 'react';
import './App.css';

const options = ['rock', 'paper', 'scissors'];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const getRandomChoice = () => options[Math.floor(Math.random() * options.length)];

  const playGame = (playerChoice) => {
    const computerChoice = getRandomChoice();
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
      setResult('It\'s a tie!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Rock Paper Scissors</h1>
          <div className="choices">
            {options.map((option) => (
              <button key={option} onClick={() => playGame(option)}>
                {option}
              </button>
            ))}
          </div>
          <p>Your choice: {playerChoice}</p>
          <p>Computer's choice: {computerChoice}</p>
          <h2>{result}</h2>
        </div>
      </header>
      <footer>
      <font face="cursive"> "The game is never over, just paused for a moment"</font>
      </footer>
    </div>
  );
};

export default App;
