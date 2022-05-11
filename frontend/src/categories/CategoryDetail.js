import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WordGeneratorApi from "./../api/api";
import LoadingSpinner from "../common/LoadingSpinner.js";
import WordCard from "./WordCard";

const CategoryDetail = ({ addingwords }) => {
    const { handle } = useParams();
    const [category, setCategory] = useState(null);
    useEffect(
        function getCategoryDetail() {
            async function getCategory() {
                let category = await WordGeneratorApi.getCategory(handle);
                setCategory(category);
            }
            getCategory();
        },
        [handle]
    );

    if (!category) return <LoadingSpinner />;

    return (
        <div className="text-center">
            <h1>{category.name}</h1>
            <WordCard words={category.words} name={category.name} addingwords={addingwords} handle={handle} />
        </div>
    )
}

export default CategoryDetail;