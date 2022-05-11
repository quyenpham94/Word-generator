import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";


const FavoriteForm = ({name, handle}) => {

    return (
        <div className="text-center">
            <h1>YOUR FAVORITE OBJECTS</h1>
            <Link className="text-deccoration-none" to={`/categories/${handle}`}>
                <Card body className="category-card" outline>
                    <CardBody>
                        <CardTitle className="text-center">
                            {name}
                        </CardTitle>
                    </CardBody>
                </Card>
            </Link>
        </div>
    );
};

export default FavoriteForm;