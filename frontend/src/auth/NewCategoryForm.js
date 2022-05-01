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
}

