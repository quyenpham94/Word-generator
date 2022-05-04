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
            history.push("/category");
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
                <FormGroup floating>
                    <Input
                        id="word1"
                        name="word1"
                        placeholder="Word1"
                        value={formData.word1}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word1">Word 1</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word2"
                        name="word2"
                        placeholder="Word2"
                        value={formData.word2}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word2">Word 2</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word3"
                        name="word3"
                        placeholder="Word3"
                        value={formData.word3}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word3">Word 3</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word4"
                        name="word4"
                        placeholder="Word4"
                        value={formData.word1}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word4">Word 4</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word5"
                        name="word5"
                        placeholder="Word5"
                        value={formData.word5}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word5">Word 5</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word6"
                        name="word6"
                        placeholder="Word6"
                        value={formData.word6}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word6">Word 6</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word7"
                        name="word7"
                        placeholder="Word7"
                        value={formData.word7}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word7">Word 7</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word8"
                        name="word8"
                        placeholder="Word8"
                        value={formData.word8}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word8">Word 8</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word9"
                        name="word9"
                        placeholder="Word9"
                        value={formData.word9}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word9">Word 9</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input
                        id="word10"
                        name="word10"
                        placeholder="Word10"
                        value={formData.word10}
                        onChange={handleChange}
                        type="text"
                        required
                    />
                    <Label for="word10">Word 10</Label>
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