import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Alert from '../common/Alert';


const LoginForm = ({ login }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        let result = await login(formData);
        if (result.success) {
            history.push("/categories");
        } else {
            setFormErrors(result.errors);
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(l => ({ ...l, [name]: value }));
    }

    return (
        <div className="LoginForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3">Log In</h3>

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
                                autoComplete="username"
                                required
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
                                autoComplete="current-password"
                                required
                            />
                        </div>

                        {formErrors.length
                            ? <Alert type="danger" messages={formErrors} />
                            : null} 

                        <button 
                            className="text-center"
                            onSubmit={handleSubmit} 
                        >
                            Login    
                        </button>   
                    </form>
                  
                    </div>  
                </div>

            </div>
            <div className="col text-center my-2">
                <span>
                    Don't have an account? <Link to="/signup">Register</Link>
                </span>
            </div>

        </div>
    )
}

export default LoginForm;