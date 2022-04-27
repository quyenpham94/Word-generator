import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CategoryList from "../categories/CategoryList";
import CategoryDetail from "../categories/CategoryDetail";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profiles/ProfileForm";
import PrivateRoute from "./PrivateRoute";
// import ProtectingRoute from "./ProtectingRoute";

/** Routes are wrapped by <Private> would only visible when logged in
 *
 * Invalid links will be redirected to Home page.
 */

const Routes = ({ login, signup }) => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Homepage login={login}/>
                </Route>
                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>
                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <Route exact path="/categories">
                    <CategoryList />
                </Route>
                <Route exact path="/categories/:handle">
                    <CategoryDetail />
                </Route>
                <PrivateRoute exact path="/profile">
                    <ProfileForm />
                </PrivateRoute>

                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default Routes;