import React, {useEffect, useState} from "react";
import WordGeneratorApi from "../../api/api";
import CategoryCard  from "./CategoryCard";
import Loading from "../Navigation/Loading";
// import Footer from "../Pages/Footer";

const CategoryList = () => {
    const [categories, setCategories] = useState(null);

    useEffect(function getCategoriesOnMount () {
        search();
    }, []);

    async function search(name) {
        let categories = await WordGeneratorApi.getCategories(name);
        setCategories(categories);
    }

    if (!categories) return <Loading />;

    return (
        <div>
            <h3 className="category-list">
                Which object would you like?
            </h3>
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
                <p className="">Sorry, no objects were found</p>
            )}
            {/* <Footer /> */}
        </div>
    );

};

export default CategoryList;