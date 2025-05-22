import React, { useState } from 'react';

const options = ['rock', 'paper', 'scissors'];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const getRandomChoice = () => options[Math.floor(Math.random() * options.length)];

  const playGame = (playerChoice) => {
    const computerChoice = getRandomChoice();
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
      setPlayerScore(playerScore + 1);
    } else {
      setResult('Computer wins!');
      setComputerScore(computerScore + 1);
    }
  };

  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setPlayerScore(0);
    setComputerScore(0);
  };

  const getChoiceImage = (choice) => {
    return choice ? `/${choice}.png` : '/question-mark.png';
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h1 style={styles.title}>🎮 Rock Paper Scissors 🎮</h1>
        
        <div style={styles.scoreBoard}>
          <div style={styles.score}>
            <span>You: {playerScore}</span>
          </div>
          <div style={styles.score}>
            <span>Computer: {computerScore}</span>
          </div>
        </div>

        <div style={styles.gameArea}>
          <div style={styles.playerSection}>
            <h3 style={styles.sectionTitle}>Your Choice</h3>
            <div style={styles.choiceDisplay}>
              <img 
                src={getChoiceImage(playerChoice)} 
                alt={playerChoice || 'your choice'} 
                style={styles.choiceImage}
              />
            </div>
          </div>

          <div style={styles.vsSection}>
            <div style={styles.vsText}>VS</div>
            {result && (
              <div style={{
                ...styles.resultText,
                color: result.includes('You win') ? '#4CAF50' : 
                       result.includes('Computer wins') ? '#f44336' : '#FF9800'
              }}>
                {result}
              </div>
            )}
          </div>

          <div style={styles.playerSection}>
            <h3 style={styles.sectionTitle}>Computer's Choice</h3>
            <div style={styles.choiceDisplay}>
              <img 
                src={getChoiceImage(computerChoice)} 
                alt={computerChoice || 'computer choice'} 
                style={styles.choiceImage}
              />
            </div>
          </div>
        </div>

        <div style={styles.choices}>
          {options.map((option) => (
            <button 
              key={option} 
              onClick={() => playGame(option)}
              style={styles.choiceButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,123,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,123,255,0.2)';
              }}
            >
              <img 
                src={`/${option}.png`} 
                alt={option} 
                style={styles.buttonImage}
              />
              <span style={styles.buttonText}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </span>
            </button>
          ))}
        </div>

        <button 
          onClick={resetGame} 
          style={styles.resetButton}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c82333';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#dc3545';
            e.target.style.transform = 'scale(1)';
          }}
        >
          🔄 Reset Game
        </button>

        <footer style={styles.footer}>
          <span style={styles.footerText}>
            "The game is never over, just paused for a moment"
          </span>
        </footer>
      </div>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  container: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '800px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  scoreBoard: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px',
    backgroundColor: '#f8f9fa',
    borderRadius: '15px',
    padding: '15px',
  },
  score: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#495057',
  },
  gameArea: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
    gap: '20px',
  },
  playerSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: '1.1rem',
    color: '#6c757d',
    marginBottom: '15px',
  },
  choiceDisplay: {
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '15px',
    border: '3px solid #e9ecef',
  },
  choiceImage: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
  },
  vsSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  vsText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#6c757d',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  },
  resultText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  },
  choices: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  choiceButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '600',
    minWidth: '120px',
    boxShadow: '0 4px 15px rgba(0,123,255,0.2)',
  },
  buttonImage: {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
  },
  buttonText: {
    marginTop: '5px',
  },
  resetButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '30px',
  },
  footer: {
    borderTop: '2px solid #e9ecef',
    paddingTop: '20px',
  },
  footerText: {
    fontFamily: 'cursive',
    fontSize: '1rem',
    color: '#6c757d',
    fontStyle: 'italic',
  },
};

export default App;