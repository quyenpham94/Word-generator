import React, {useEffect, useState} from "react";
import WordGeneratorApi from "../api/api";
import CategoryCard  from "./CategoryCard";
import LoadingSpinner from "../common/LoadingSpinner";
import SearchForm from "../common/SearchForm";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
 
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

            <SearchForm searchFor={search} />
            <div className="text-center mt-3 mb-3">
                <span> Create your own object?
                    <p><Link to="/newcategory"><button>Create New</button></Link></p>
                </span>
            </div>
            {categories.length ? (
                <div>
                    {categories.map((c) => (
                        <CategoryCard
                            id={uuidv4()}
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                            data={categories}
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