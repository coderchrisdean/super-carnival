import React from 'react';
import './Score.css';

const Score = ({ score, totalQuestions, handleRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="score-container">
      <h2 className="score-text">Your Score</h2>
      <p className="score-percentage">{percentage}% Correct</p>
      <button className="btn btn-primary" onClick={handleRestart}>
        Try Again
      </button>
    </div>
  );
};

export default Score;
