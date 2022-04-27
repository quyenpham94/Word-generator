import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WordGeneratorApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner.js";

const CategoryDetail = () => {
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
        <div className="">
            <h1 className="text-success">{category.name}</h1>
        </div>
    )
}

export default CategoryDetail;