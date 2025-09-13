import React, { useEffect, useState } from "react";
import axios from "axios";

function FlashcardList() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/flashcards")
      .then(res => setFlashcards(res.data))
      .catch(err => console.error(err));
  }, []);

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