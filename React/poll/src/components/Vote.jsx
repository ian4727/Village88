import React, { useState } from 'react';
import love from '../assets/images/like.svg';
import vomit from '../assets/images/dislike.svg';
import Typewriter from './Typewriter';
import Button from 'react-bootstrap/Button';
import Result from './Result';

function Vote() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([
    {
      text: 'Pinya sa pizza',
      likes: 0,
      dislikes: 0,
    },
    {
      text: 'Atay sa pansit',
      likes: 0,
      dislikes: 0,
    },
    {
      text: 'Pechay sa cornedbeef',
      likes: 0,
      dislikes: 0,
    },
  ]);

  function handleLike() {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].likes += 1;
    setQuestions(updatedQuestions);
  }

  function handleDislike() {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].dislikes += 1;
    setQuestions(updatedQuestions);
  }

  function handleNextQuestion() {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  }

  if (showResult) {
    return <Result questions={questions} />;
  }

  return (
    <div className='container'>
      <div className='questions'>
        <h2><Typewriter text={questions[questionIndex].text} /></h2>
        <Button variant="outline-danger" onClick={handleLike}>
          <img src={love} alt="like" />
        </Button>{' '}
        <Button variant="outline-danger" onClick={handleDislike}>
          <img src={vomit} alt="dislike" />
        </Button>
        
        <Button variant="outline-success" onClick={handleNextQuestion}>
          {questionIndex < questions.length - 1 ? 'Next Question' : 'Show Results'}
        </Button>
      </div>
    </div>
  );
}

export default Vote;
