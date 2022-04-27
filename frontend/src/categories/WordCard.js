import React , {useState} from "react";
import WordDetail from "./WordDetail";
// import "./WordCard.css";

/** Show list of word cards.
 *
 * Used by CategoryDetail to list words. Receives a view
 * func prop which will be called by WordDetail on view.
 *
 * CategoryDetail -> WordCard -> WordDetail
 *
 */

const WordCard = ({ words }) => {

  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);

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
      <div className="score">
        <div className="card">{score}</div>
        <button type="button"
                onClick={() => setScore( score + 1 )}
        >Correct
        </button>
      </div>

    </>
  );
};

export default WordCard;