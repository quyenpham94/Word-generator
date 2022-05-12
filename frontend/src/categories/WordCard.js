import React , {useState } from "react";
import WordDetail from "./WordDetail";
import "./WordCard.css";
import { Link } from "react-router-dom";
import AddingWordsForm from "../auth/AddingWordsForm";
// import UserContext from "../auth/UserContext";


/** Show list of word cards.
 *
 * Used by CategoryDetail to list words. Receives a view
 * func prop which will be called by WordDetail on view.
 *
 * CategoryDetail -> WordCard -> WordDetail
 *
 */

const WordCard = ({ words, name, addingwords, handle}) => {
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);

    // handles form submit
    async function handleSubmit(e) {
      e.preventDefault();

      return (
        <div>
          <h1>Adding Words for {handle} Category</h1>
          <AddingWordsForm name={name} addingwords={addingwords} />
        </div>
      )
    }


  return (
    <>
      <div className="word-card container">
          {(next < words.length) 
          ? <WordDetail key={words[next].id} id={words[next].id} name={words[next].name} />
          : null}
          <button type="button" 
                  onClick={() => setNext( next + 1 )}
          >Next
          </button>
      </div>
      <div>
        <button type="submit" onSubmit={handleSubmit}>
                          <Link to="/addingwords">
                          Add Word
                          </Link>
        </button>
      </div>
      <div>
        <button className="float-left">
          <Link to='/categories'>
            Back
          </Link>
        </button>
      </div>
      <div className="score float-right">
        <div className="score-count">{score}</div>
        <button type="button"
                onClick={() => setScore( score + 1 )}
        >Correct Answer
        </button>
      </div>

    </>
  );
};

export default WordCard;