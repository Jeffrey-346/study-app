import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import AddFlashcard from "./AddFlashcard";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = (newFC) => {
    setFlashcards(prev => [...prev, newFC]);
  };

  return (
    <div>
      <h1>📚 Study App</h1>
      <AddFlashcard onAdd={addFlashcard} />
      <FlashcardList />
    </div>
  );
}

export default App;