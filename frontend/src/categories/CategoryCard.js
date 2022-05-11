import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import WordGeneratorApi from "../api/api";
import UserContext from "../auth/UserContext";
// import { v4 as uuidv4 } from 'uuid';
import "./CategoryCard.css";

/** Show information of a category on the Category List 
 * 
 * CategoryList -> CategoryCard
*/


const CategoryCard = ({ name, handle }) => {
    // authentication check
    const { currentUser } = useContext(UserContext);
    console.debug("Navigation", "currentUser=", currentUser);


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
                            {/* <button className="float-right">Fav</button> */}
                            {(currentUser.username !== "testadmin") ? "" : 
                            <button className="float-right" onClick={handleClick}>Remove</button>
                            }
                        </CardTitle>
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}

export default CategoryCard;