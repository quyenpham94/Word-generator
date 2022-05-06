import React, { useState } from "react";
import { useHistory } from  "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Message from "./Message";

const NewCategoryForm = ({ newcategory }) => {
    const [formData, setFormData] = useState({
        handle: "",
        name: "",
        description: "",
    });

    const [errors, setErrors] = useState({});
    const history = useHistory();

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
        setFormData(data => ({...data, [name]: value }));
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
                </FormGroup>{" "}
                {errors.length ? <Message type="danger" messages={errors} /> : null}
                <div className="text-center">
                    <button type="submit" onSubmit={handleSubmit}>
                        New Category
                    </button>
                </div>

            </Form>
        </div>
    );
};

export default NewCategoryForm;