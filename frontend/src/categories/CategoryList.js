import React, {useEffect, useState} from "react";
import WordGeneratorApi from "../api/api";
import CategoryCard  from "./CategoryCard";
import LoadingSpinner from "../common/LoadingSpinner";
import SearchForm from "../common/SearchForm";
import { Link } from "react-router-dom";

const CategoryList = () => {
    const [categories, setCategories] = useState(null);

    useEffect(function getCategoriesOnMount () {
        search();
    }, []);

    async function search(name) {
        let categories = await WordGeneratorApi.getCategories(name);
        setCategories(categories);
    }

    if (!categories) return <LoadingSpinner />;

    return (
        <div>
            <h3 className="category-list">
                Which object would you like?
            </h3>
            <div>
                <button><Link to="/newcategory">Create New</Link></button>
            </div>
            <SearchForm searchFor={search} />
            {categories.length ? (
                <div>
                    {categories.map((c) => (
                        <CategoryCard
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center">Sorry, no objects were found</p>
            )}
        </div>
    );

};

export default CategoryList;