import React, { useState, useEffect } from 'react';
import Question from './Question';
import Score from './Score';
import questionsData from '../data/questions.json';
import './Quiz.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(shuffleArray(questionsData));
  }, []);

  const handleAnswer = (answer) => {
    const question = questions[0];
    const isCorrect = question.options.indexOf(answer) === question.answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setQuestions((prevQuestions) => prevQuestions.slice(1));
  };

  const handleRestart = () => {
    setQuestions(shuffleArray(questionsData));
    setScore(0);
  };

  return (
    <div className="quiz-container">
      {questions.length > 0 ? (
        <Question
          question={questions[0]}
          handleAnswer={handleAnswer}
          totalQuestions={questions.length}
        />
      ) : (
        <Score
          score={score}
          totalQuestions={questionsData.length}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Quiz;
