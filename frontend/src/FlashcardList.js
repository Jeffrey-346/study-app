import React from "react";

function FlashcardList({ flashcards }) {
  return (
    <div>
      <h2>Flashcards</h2>
      <ul>
        {flashcards.map(fc => (
          <li key={fc.id}><b>{fc.question}</b>: {fc.answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default FlashcardList;