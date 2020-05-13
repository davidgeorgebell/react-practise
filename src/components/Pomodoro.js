import React, { useState } from 'react';

const padTime = time => time.toString().padStart(2, '0');

export const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(3);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  const startTimer = () => {
    setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft - 1;
        return 0;
      });
    }, 1000);
  };

  return (
    <div>
      <h2>Pomodoro</h2>
      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>

        <div className='buttons'>
          <button onClick={startTimer}>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
};
