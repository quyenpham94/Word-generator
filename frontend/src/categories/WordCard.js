import React , {useState} from "react";
import WordDetail from "./WordDetail";
import "./WordCard.css";
import { Link } from "react-router-dom";
import AddingWordsForm from "../auth/AddingWordsForm";
// import AddingWordsForm from "../auth/AddingWordsForm";
 // import AddingWordsForm from "../auth/AddingWordsForm";

/** Show list of word cards.
 *
 * Used by CategoryDetail to list words. Receives a view
 * func prop which will be called by WordDetail on view.
 *
 * CategoryDetail -> WordCard -> WordDetail
 *
 */

const WordCard = ({ words, name, addingwords }) => {
  console.log(name)
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  // const [errors, setErrors] = useState({});
  // const history = useHistory();
  // const [formData, setFormData] = useState({
  //   handle: "",
  //   name: "",
  //   description: "",
  // });

    // // handles form submit
    // async function handleSubmit(e) {
    //   e.preventDefault();
    //   let res = await addingwords(formData);
      
    //   if (res.success) {
    //       history.push("/addingwords");
          
    //   } else {
    //       setErrors(res.errors);
    //   }
    // }

    // handles form submit
    async function handleSubmit(e) {
      e.preventDefault();
      return (
        <>
          <AddingWordsForm name={name} addingwords={addingwords} />
        </>
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
                          Add Words
                          </Link>
        </button>
      </div>
      <div className="score  float-right">
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