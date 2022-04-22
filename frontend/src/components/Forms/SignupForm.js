import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Message from "./Message";

/** Signup form.
 *
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routed as /signup
 *
 * Routes -> SignupForm -> Message
 */

const SignupForm = ({ signup }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);
    const [touched, setTouched] = useState({});
    const history = useHistory();
   
    console.debug(
        "SignupForm",
        "signup=",
        typeof signup,
        "formData=",
        formData,
        "errors=",
        errors
    );

    /* validations array contains a function which
    * returns an obj w/ an error message
    * or something elses if there's no error.
    */
  
    const validations = [
        ({ username }) => 
            isRequired(username) || { username: "Username is required." }, 
        ({ password }) => 
            isRequired(password) || { password: "Password is required." },
        ({ firstName }) => 
            isRequired(firstName) || { firstName: "First Name is required." },
        ({ lastName }) => 
            isRequired(lastName) || { lastName: "Last Name is required." },
        ({ email }) => 
            isRequired(email) || { email: "Email is required." },        
    ];
    
    // function for validations
    const isRequired = (value) => {
        return value != null && value.trim().length > 0;
    };

    // returns the errors and is Valid flag
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
        let res = await signup(formData);
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
        <div className="SignupForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h2 className="mb-3">Sign Up</h2>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input 
                                    name="username"
                                    className="form-control"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>First Name</label>
                                <input 
                                    name="firstName"
                                    className="form-control"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input 
                                    name="lastName"
                                    className="form-control"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email" 
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            {formErrors.length 
                                ? <Alert type="danger" messages={formErrors} />
                                : null
                            }

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                                onSubmit={handleSubmit}
                            >
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignupForm;