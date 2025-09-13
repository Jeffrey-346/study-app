import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import AddFlashcard from "./AddFlashcard";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const res = await axios.get("http://localhost:4000/flashcards"); // use your backend URL/port
        setFlashcards(res.data);
      } catch (err) {
        console.error("Error fetching flashcards:", err);
      }
    };

    fetchFlashcards();
  }, []);

  const addFlashcard = async (newFC) => {
    try {
    const res = await axios.post("http://localhost:4000/flashcards", newFC);
    setFlashcards(prev => [...prev, res.data]); // update local state with saved flashcard
  } catch (err) {
    console.error("Error adding flashcard:", err);
  }
  };

  return (
    <div>
      <h1>📚 Study App</h1>
      <AddFlashcard onAdd={addFlashcard} />
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;