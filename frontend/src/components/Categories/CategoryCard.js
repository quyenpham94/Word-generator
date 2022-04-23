import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
// import "./CategoryCard.css";

/** Show information of a category on the Category List 
 * 
 * CategoryList -> CategoryCard
*/

const CategoryCard = ({ name, handle }) => {
    return (
        <div>
            <Link className="text-deccoration-none" to={`/categories/${handle}`}>
                <Card body className="category-card" outline>
                    <CardBody>
                        <CardTitle className="text-success">
                            {name}
                        </CardTitle>
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}

export default CategoryCard;
