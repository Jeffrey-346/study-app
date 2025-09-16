import React, { useState, useEffect } from "react";
import FlashcardList from "./components/FlashcardList";
import AddFlashcard from "./components/AddFlashcard";
import logo from "./assets/logo.png";
import "./styles/App.css";
import { addFlashcard, deleteFlashcard } from "./actions/FlashcardActions";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  // Fetch flashcards on mount
  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const res = await axios.get("http://localhost:4000/flashcards");
        setFlashcards(res.data);
      } catch (err) {
        console.error("Error fetching flashcards:", err);
      }
    };

    fetchFlashcards();
  }, []);

  return (
    <div className = "App header">
      <h1 className ="header">
        <img className="image" src={logo} alt="Logo" />
        Jeffrey's Super Cool Study App
        </h1>
      <AddFlashcard onAdd={(newFC) => addFlashcard(newFC, setFlashcards)} />
      <FlashcardList 
        flashcards={flashcards} 
        onDelete={(id) => deleteFlashcard(id, setFlashcards)} 
      />
    </div>
  );
}

export default App;