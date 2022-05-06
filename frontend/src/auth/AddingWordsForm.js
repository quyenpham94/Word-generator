import React, { useState } from "react";
import { useHistory } from  "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Message from "./Message";

const AddingWordsForm = ({ addingwords }) => {
    const [formData, setFormData] = useState({
        name: "",
        categoryHandle: "",
    });

    
    const [errors, setErrors] = useState({});
    const history = useHistory();

    // handles form submit
    async function handleSubmit(e) {
        e.preventDefault();
        let res = await addingwords(formData);
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
            <h3>New Words For </h3>
            <Form className="" onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input  
                        id="categoryHandle"
                        name="categoryHandle"
                        placeholder="Handle of New Category"
                        value1={formData.categoryHandle}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="categoryHandle">Category Handle</Label>
                </FormGroup>{" "}
            </Form>
            <Form className="" onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input
                        id="word"
                        name="name"
                        placeholder="Word"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="word">Word</Label>
                </FormGroup>{" "} 
                {errors.length ? <Message type="danger" messages={errors} /> : null}
                <div className="text-center">
                    <button type="submit" onSubmit={handleSubmit}>
                        Add 
                    </button>
                </div>

            </Form>
        </div>
    );
};

export default AddingWordsForm;