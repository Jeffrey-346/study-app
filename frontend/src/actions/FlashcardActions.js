import axios from "axios";

// Add a new flashcard
export const addFlashcard = async (newFC, setFlashcards) => {
  try {
    const res = await axios.post("http://localhost:4000/flashcards", newFC);
    setFlashcards(prev => [...prev, res.data]);
  } catch (err) {
    console.error("Error adding flashcard:", err);
  }
};

export const deleteFlashcard = async (id, setFlashcards) => {
  try {
    const res = await fetch(`http://localhost:4000/flashcards/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete");

    setFlashcards(prev => prev.filter(fc => fc.id !== id));
  } catch (err) {
    console.error(err);
  }
};