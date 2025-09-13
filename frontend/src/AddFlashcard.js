import React, { useState } from "react";
import axios from "axios";

function AddFlashcard({ onAdd }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/flashcards", { question, answer });
    onAdd(res.data);
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        required
      />
      <input 
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        required
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
}

export default AddFlashcard;