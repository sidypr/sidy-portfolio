import React from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text }) => {
  return (
    <div className="animated-text">
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="animated-letter"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText; 