import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import WordGeneratorApi from "../api/api";
// import "./CategoryCard.css";

/** Show information of a category on the Category List 
 * 
 * CategoryList -> CategoryCard
*/


const CategoryCard = ({ name, handle }) => {
    console.log(name);

    function handleClick(e) {
        e.preventDefault();
        WordGeneratorApi.remove(handle);
    }
    return (
        <div className="category-card"> 
            <Link className="text-deccoration-none" to={`/categories/${handle}`}>
                <Card body className="category-card" outline>
                    <CardBody>
                        <CardTitle className="text-center">
                            {name}
                            <button className="float-right">Favorite</button>
                            <button className="float-right" onClick={handleClick}>Remove</button>
                        </CardTitle>
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}

export default CategoryCard;