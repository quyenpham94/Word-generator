import React from "react";
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
  return (
    <>
      <div className="word-card">
        {words.map((i) => (
          <WordDetail key={i.id} id={i.id} name={i.name} />
        ))}
      </div>

    </>
  );
};

export default WordCard;