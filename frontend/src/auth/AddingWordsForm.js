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
            history.push("/addingwords");
        } else {
            setErrors(res.errors);
        }
    }

    // updates form data field
    const handleChange = (e) => {
        const { name, value, categoryHandle, value1 } = e.target;
        setFormData(data => ({...data, [name]: value, [categoryHandle]: value1 }));
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
                        value={formData.word}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="word">Word</Label>
                </FormGroup>{" "} 
                {/* <FormGroup floating>
                    <Input
                        id="word2"
                        name="name"
                        placeholder="Word2"
                        value={formData.word2}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="word2">Word 2</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word3"
                        name="name"
                        placeholder="Word3"
                        value={formData.word3}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="word3">Word 3</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word4"
                        name="name"
                        placeholder="Word4"
                        value={formData.word4}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="word4">Word 4</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word5"
                        name="name"
                        placeholder="Word5"
                        value={formData.word5}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="word5">Word 5</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word6"
                        name="name"
                        placeholder="Word6"
                        value={formData.word6}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="word6">Word 6</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word7"
                        name="name"
                        placeholder="Word7"
                        value={formData.word7}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="word7">Word 7</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word8"
                        name="name"
                        placeholder="Word8"
                        value={formData.word8}
                        onChange={handleChange}
                        type="text"
                    />
                    <Label for="word8">Word 8</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word9"
                        name="name"
                        placeholder="Word9"
                        value={formData.word9}
                        type="text"
                    />
                    <Label for="word9">Word 9</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word10"
                        name="name"
                        placeholder="Word10"
                        value={formData.word10}
                        type="text"
                    />
                    <Label for="word10">Word 10</Label>
                </FormGroup>{" "} */}
                {errors.length ? <Message type="danger" messages={errors} /> : null}
                <div className="text-center">
                    <button type="submit" onSubmit={handleSubmit}>
                        Update
                    </button>
                </div>

            </Form>
        </div>
    );
};

export default AddingWordsForm;