import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);

  const timeIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;

  if(timerRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimerRemaining(targetTime * 1000)
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimerRemaining(prev => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} timerRemaining={timerRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={`${timeIsActive ? "active" : ""}`}>
          {timeIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
