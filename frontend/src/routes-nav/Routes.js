import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CategoryList from "../categories/CategoryList";
import CategoryDetail from "../categories/CategoryDetail";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profiles/ProfileForm";
import PrivateRoute from "./PrivateRoute";
import ProtectingRoute from "./ProtectingRoute";
import NewCategoryForm from "../auth/NewCategoryForm";
import AddingWordsForm from "../auth/AddingWordsForm";
// import WordCard from "../categories/WordCard";

/** Routes are wrapped by <Private> would only visible when logged in
 *
 * Invalid links will be redirected to Home page.
 */

const Routes = ({ login, signup, newcategory, addingwords }) => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Homepage login={login}/>
                </Route>
                <ProtectingRoute exact path="/login">
                    <LoginForm login={login} />
                </ProtectingRoute>
                <ProtectingRoute exact path="/signup">
                    <SignupForm signup={signup} />
                </ProtectingRoute>


                <PrivateRoute exact path="/categories">
                    <CategoryList />
                </PrivateRoute>
                <PrivateRoute exact path="/categories/:handle">
                    <CategoryDetail />
                </PrivateRoute>
                <PrivateRoute exact path="/profile">
                    <ProfileForm />
                </PrivateRoute>
                <PrivateRoute exact path="/newcategory">
                    <NewCategoryForm newcategory={newcategory} />
                </PrivateRoute>
                <PrivateRoute exact path="/addingwords">
                    <AddingWordsForm addingwords={addingwords} />
                </PrivateRoute>

                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default Routes;