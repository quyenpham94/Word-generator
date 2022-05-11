import React, {useState} from "react";
import WordDetail from "../categories/WordDetail";
import { Link } from "react-router-dom";


const LearnPage = () => {
    const [next, setNext] = useState(0);
    const [score, setScore] = useState(0);
    let name = "animals";
    let words = ["dog", "cat", "rabbit", "snake", "turtle"]; 
    return (
        <div className="text-center">
            <h1>RULE</h1>
            <span>
            To play Word Generator, make two teams with your group of friends.
            A person on each team must draw, act out or provide clues for the Word
            without saying it. If their team guesses the word right, click on correct 
            button to count the score. Switch teams and keep repeating this until all 
            words have passed. In the end the team with the most scores wins!
            </span>
            <div>
            <div className="mt-5">
                <h1> DEMO </h1>
                <h2>{name}</h2>
                {(next < words.length) 
                ? <WordDetail name={words[next]} />
                : null}
                    <button type="button" 
                            onClick={() => setNext( next + 1 )}
                    >Next
                    </button>
                </div>
                <div className="score float-right ">
                    <div className="score-count">{score}</div>
                    <button type="button"
                            onClick={() => setScore( score + 1 )}
                    >Correct Answer
                    </button>
                </div>
                <div className="score float-left">
                    <button>
                        <Link to="/rule" > Refresh </Link>
                    </button>
                </div>
                <div className="score text-center">
                    <button>
                        <Link to="/categories" > START </Link>
                    </button>
                </div>
            </div>

        </div>

    )};


export default LearnPage;