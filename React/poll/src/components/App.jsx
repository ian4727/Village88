import React, { useState } from 'react';
import Vote from './Vote';
import PollResult from './Result';

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [showResults, setShowResults] = useState(false);

  function handleLikeClick() {
    setLikes(prevLikes => prevLikes + 1);
    setShowResults(true);
  }

  function handleDislikeClick() {
    setDislikes(prevDislikes => prevDislikes + 1);
    setShowResults(true);
  }

  return (
    <div>
      {!showResults && (
        <Vote
          onLikeClick={handleLikeClick}
          onDislikeClick={handleDislikeClick}
        />
      )}
      {showResults && <PollResult likes={likes} dislikes={dislikes} />}
    </div>
  );
}

export default App;
