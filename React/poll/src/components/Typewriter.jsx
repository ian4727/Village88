import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, textIndex + 1));
      setTextIndex(textIndex => textIndex + 1);
    }, 100);

    return () => clearInterval(intervalId);
  }, [text, textIndex]);

  return <span>{displayText}</span>;
};

export default Typewriter;
