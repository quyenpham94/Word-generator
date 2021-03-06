import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Message from "./Message";

/** Login form.
 *
 * On submission:
 * - calls login function prop
 * - redirects to /categories route
 *
 * Routed as /login
 *
 * Routes -> LoginForm -> Message
 */


const LoginForm = ({ login }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors ] = useState([]);
    const history = useHistory();

    console.debug(
        "LoginForm",
        "login=",
        typeof login,
        "formData=",
        formData,
        "errors",
        errors
    );

    async function handleSubmit(e) {
        e.preventDefault();
        let res = await login(formData);
        if (res.success) {
            history.push("/categories");
        } else {
            setErrors(res.errors);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((data) => ({ ...data, [name]: value }));
    }

    return (
        <div className="login-form">
            <h3 className="text-success text-center">Log In</h3>
            <Form className="mx-5 mt-4" onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input 
                        id="username"
                        name="username"
                        placeholder="Username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="username"
                        required
                    />
                    <Label for="username">Username</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                    <Input 
                        id="password"
                        name="passsword"
                        placeholder="Password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />
                    <Label for="password">Password</Label>
                </FormGroup>{" "}
                {errors.length ? <Message type="danger" messages={errors} /> : null}
                <div className="text-center">
                    <Button>Login</Button>
                </div>
            </Form>
            <div className="text-center">
                <Link to="/signup">
                    <Button>Create An Account</Button>
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;