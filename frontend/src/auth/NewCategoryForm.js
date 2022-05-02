import React, { useState } from "react";
import { Link, useHistory } from  "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Message from "./Message";

const NewCategoryForm = () => {
    const [formData, setFormData] = useState({
        handle: "",
        name: "",
        description: "",
    });

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);
    const [touched, setTouched] = useState({});
    const history = useHistory();


  /* validations array contains a function which
   * returns an obj w/ an error message
   * or something elses if there's no error.
   */
    const validations = [
        ({ handle }) => 
            isRequired(handle) || { handle: "Handle is required."},
        ({ name }) => 
            isRequired(name) || { handle: "Name is required."},
        ({ description }) => 
            isRequired(description) || { handle: "Description is required."},
    ];

    // function for validations
    const isRequired = (value) => {
        return value != null && value.trirm().length > 0;
    };

    // returns the errors and isValid flag
    const validate = (validations, data) => {
        const errors = validations
            .map((validation) => validation(data))
            .filter((validation) => typeof validation === "object");

        return {
            isValid: errors.length === 0,
            errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
        };
    };

    // handles form submit
    async function handleSubmit(e) {
        e.preventDefault();
        let res = await newcategory(formData);
        if (res.success) {
            history.push("/categories");
        } else {
            setErrors(res.errors);
        }
    }

    // updates form data field
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newData = { ...formData, [name]: value };
        const { isValid, errors } = validate(validations, newData);
        setFormData(newData);
        setIsValid(isValid);
        setErrors(errors);
        setTouched({ ...touched, [name]: true });
    };

    return (
        <div>
            <h3>New Category</h3>
            <Form className="" onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input
                        id="handle"
                        name="handle"
                        placeholder="Handle"
                        value={formData.handle}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="handle">Handle</Label>
                    {touched.handle && errors.handle && (
                        <p className="text-danger">{errors.handle}</p> 
                    )}
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="name">Name</Label>
                    {touched.name && errors.name && (
                        <p className="text-danger">{errors.name}</p> 
                    )}
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="description">Description</Label>
                    {touched.description && errors.description && (
                        <p className="text-danger">{errors.description}</p> 
                    )}
                </FormGroup>{" "}
                {errors.length ? <Message type="danger" messages={errors} /> : null}
                <div className="text-center">
                    <button color="success" disables={!isValid}>
                        New Category
                    </button>
                </div>

            </Form>
        </div>
    );
};

export default NewCategoryForm;