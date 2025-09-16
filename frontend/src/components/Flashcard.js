import React, { useState } from "react";
import './Flashcard.css';

const Flashcard = ({ flashcard, onDelete }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggle = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <div className="flashcard" onClick={handleToggle}>
      <div className="flashcard-content">
        <h3>{flashcard.question}</h3>
        <p className="answer">
          {showAnswer ? flashcard.answer : "Click to reveal answer"}
        </p>
        <button 
          className="delete-btn" 
          onClick={(e) => {
            e.stopPropagation(); // prevent click from revealing answer
            onDelete(flashcard.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Flashcard;