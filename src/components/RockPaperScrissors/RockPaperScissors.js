import React, { useState, useEffect } from 'react';

import './RockPaperScissors.css';

const choices = [
  {
    id: 1,
    name: 'rock',
    emoji: '🧗‍♀️',
    losesTo: 2,
  },
  {
    id: 2,
    name: 'paper',
    emoji: '📃',
    losesTo: 3,
  },
  {
    id: 3,
    name: 'scissors',
    emoji: '✂️',
    losesTo: 1,
  },
];

export const RockPaperScissors = () => {
  const [choice, setChoice] = useState(null);
  const [computer, setComputer] = useState(null);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputer(randomChoice);
  }, []);

  function handleChoice(choice) {
    const chosen = choices.find(c => c.id === choice);
    setChoice(chosen);

    if (chosen.losesTo === computer.id) {
      setGameState('lose');
      setLosses(losses => losses + 1);
    } else if (computer.losesTo === chosen.id) {
      setGameState('win');
      setWins(wins => wins + 1);
    } else if (computer.id === choice.id) {
      setGameState('draw');
    }
  }

  function renderComponent(choice) {
    const component = choice.emoji;
    return component;
  }

  return (
    <div>
      {gameState && (
        <div className={`${gameState}`}>
          <p>{gameState}</p>
          <p>{renderComponent(choice)}</p>
          <p>{renderComponent(computer)}</p>
        </div>
      )}
      <div>
        <p>
          {wins} <span>{wins === 1 ? 'Win' : 'Wins'}</span>
        </p>
        <p>
          {losses}
          <span>{losses === 1 ? 'Loss' : 'Loss'}</span>
        </p>
      </div>
      <div className='button-wrapper'>
        <button onClick={() => handleChoice(1)}>
          <span role='img' aria-label='rock'>
            🧗‍♀️
          </span>
        </button>
        <button onClick={() => handleChoice(2)}>
          <span role='img' aria-label='paper'>
            📃
          </span>
        </button>
        <button onClick={() => handleChoice(3)}>
          <span role='img' aria-label='rock'>
            ✂️
          </span>
        </button>
      </div>
    </div>
  );
};
