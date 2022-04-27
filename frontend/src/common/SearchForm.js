import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";


/** Search box in Category List page
 *
 * CategoryList -> SearchForm
 */

const SearchForm = ({ searchFor }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // get rid of the extra spaces
        let term = searchTerm.trim();
        searchFor(term || undefined);
        setSearchTerm("");
    };

    //update value in form
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup className="SearchForm">
                <Label for="searchForm"></Label>
                <Input
                    id="searchForm"
                    name="search"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <div className="text-center">
                    <Button type="submit">
                        Search
                    </Button>
                    <Button>
                        <Link to="/categories" />
                        Reset
                    </Button>
                </div>
            </FormGroup>
        </Form>
    );
};

export default SearchForm;