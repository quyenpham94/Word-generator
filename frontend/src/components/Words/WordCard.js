import React from "react";


const WordCard = ({ words }) => {
    return (
        <>
            <div className="word-card">
                {words.map((w) => (
                    <WordDetail key={w.id} id={w.id} name={w.name} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default WordCard;