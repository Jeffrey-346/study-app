import './Flashcard.css';
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards, onDelete }) => {
return (
    <div className="flashcard-list flashcard-container">
      {flashcards.length === 0}
      {flashcards.map(fc => (
        <Flashcard key={fc.id} flashcard={fc} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default FlashcardList;