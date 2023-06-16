import React from 'react';
import Button from 'react-bootstrap/Button';

function Result({ questions }) {
  const totalLikes = questions.reduce((total, question) => total + question.likes, 0);
  const totalDislikes = questions.reduce((total, question) => total + question.dislikes, 0);

  return (
    <div className='container'>
      <div className='result'>
        <h1>Poll Results</h1>
        <p>Total Likes: {totalLikes}</p>
        <p>Total Dislikes: {totalDislikes}</p>
        {questions.map((question, index) => {
          const totalVotes = question.likes + question.dislikes;
          const likePercentage = totalVotes === 0 ? 0 : (question.likes / totalVotes) * 100;
          const dislikePercentage = totalVotes === 0 ? 0 : (question.dislikes / totalVotes) * 100;

          return (
            <div key={index}>
              <h3>{question.text}</h3>
              <p>Likes: {question.likes} ({likePercentage.toFixed(2)}%)</p>
              <p>Dislikes: {question.dislikes} ({dislikePercentage.toFixed(2)}%)</p>
            </div>
          );
        })}
        <Button variant="outline-primary" onClick={() => window.location.reload()}>Restart Poll</Button>
      </div>
    </div>
  );
}

export default Result;
