import React from 'react';
import './Question.css';

const Question = ({ question, handleAnswer }) => {
  if (!question) {
    return null;
  }

  const { question: questionText, options } = question;

  return (
    <div className="question-container">
      <h2 className="question-text">{questionText}</h2>
      <ul className="options-list">
        {options.map((option, index) => (
          <li
            key={index}
            className="option-item"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
