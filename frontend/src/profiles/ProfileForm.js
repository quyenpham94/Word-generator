import React, { useContext, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Message from "../auth/Message";
import WordGeneratorApi from "../api/api";
import UserContext from "../auth/UserContext";

/** Profile editing form
 *
 * Routed as /profile
 *
 * Routes -> ProfileForm -> Message
 */

const ProfileForm = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
    });
    const [errors, setErrors] = useState([]);
    const [confirmed, setConfirmed] = useState(false);

    /** on form submit:
     * - attempt save to backend & report any errors
     * - if successful
     *   - clear previous error messages and password
     *   - show save-confirmed message
     *   - set current user info throughout the site
     */
    
    async function handleSubmit(e) {
        e.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = await WordGeneratorApi.saveProfile(username, profileData);
        } catch (err) {
            setErrors(err);
            return;
        }

        setFormData((formData) => ({ ...formData, password: "" }));
        setErrors([]);
        setConfirmed(true);

        // trigger reloading of user information throughout the site
        setCurrentUser(updatedUser);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
        setErrors([]);
    };

    return (
        <div className="profile-form">
            <h3 className="text-success text-center">Edit Profile</h3>
            <Form className="" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="" for="username">
                        Username: {formData.username}
                    </Label>
                </FormGroup>

                <FormGroup>
                    <Label className="" for="firstName">
                        Firstname
                    </Label>
                    <Input  
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label className="" for="lastName">
                        Lastname
                    </Label>
                    <Input  
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </FormGroup>    

                <FormGroup>
                    <Label className="" for="email">
                        Email
                    </Label>
                    <Input  
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormGroup>     
                
                <FormGroup>
                    <Label className="" for="password">
                        New Password
                    </Label>
                    <Input  
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </FormGroup>

                {errors.length ? <Message type="danger" messages={errors} /> : null}

                {confirmed ? (
                    <Message type="success" messages={["Updated successfully."]} />
                ) : null}

                {currentUser.username !== "testuser" ? (
                    <button color="success">
                        Save Changes
                    </button>
                ) : (
                    <span className="text-danger">
                        <button>
                            Save Changes
                        </button>
                        Please sign up to change your profile
                    </span>
                )} 

            </Form>
        </div>
    );
};

export default ProfileForm;