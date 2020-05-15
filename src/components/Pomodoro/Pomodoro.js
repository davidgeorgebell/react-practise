import React, { useState, useRef } from 'react';

const padTime = time => time.toString().padStart(2, '0');

export const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  let intervalRef = useRef(null);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    setRunning(true);

    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft - 1;
        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(25 * 60);
    setRunning(false);
  };

  return (
    <div>
      <h2>Pomodoro</h2>
      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>

        <div className='buttons'>
          {!running && <button onClick={startTimer}>Start</button>}
          {running && <button onClick={stopTimer}>Stop</button>}
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
};
