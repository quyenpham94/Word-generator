import React, {useState, useEffect } from "react";
import Routes from "../Routes/Routes";
import NavBar from "../Navigation/NavBar";
import { BrowserRouter } from "react-router-dom"; 
import WordGeneratorApi from "../../api/api";
import jwt from "jsonwebtoken";
import UserContext from "../../UserContext";
import Loading from "../Navigation/Loading";
import useLocalStorage from "../../hooks/useLocalStorage";

import './App.css';

// Key name for storing token in localStorage to stay logged in
export const TOKEN_STORAGE_ID = "wordgenerator-token";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
    const [viewIds, setViewIds] = useState(new Set([]));

    // Load user info from API. Until a user is logged in and they have a token,
    // this should not run. It only needs to re-run when a user logs out, so
    // the value of the token is a dependency for this effect.

    useEffect(
        function loadUserInfo() {
            async function getCurrentUser() {
                if (token) {
                    try {
                        let { username } = jwt.decode(token);
                        // put the token on the WordGeneratorApi class
                        WordGeneratorApi.token = token;
                        let currentUser = await WordGeneratorApi.getCurrentUser(username);
                        setCurrentUser(currentUser);
                    } catch (err) {
                        setCurrentUser(null);
                    }
                }
                setIsLoaded(true);
            }

            // set isLoaded to false while async getCurrentUser runs; once the
            // data is fetched (or even if an error happens!), this will be set back
            // to false to control the spinner.  
            setIsLoaded(false);
            getCurrentUser();  
        },
        [token]
    );

    // handles logout
    const logout = () => {
        setCurrentUser(null);
        setToken(null);
    };

    // handles signup & automatically logs in after that 
    async function signup(data) {
        try {
            let token = await WordGeneratorApi.signup(data);
            setToken(token);
            return { success: true };
        } catch (errors) {
            console.error("signup failed", errors);
            return { success: false, errors };
        }
    }

    // handles log in
    async function login(data) {
        try {
            let token = await WordGeneratorApi.login(data);
            setToken(token);
            return { success: true };
        } catch (errors) {
            return { success: false, errors }
        }
    }// checks if an item has been viewed
    const hasViewed = (id) => {
        if (hasViewed(id)) return;
        WordGeneratorApi.view(currentUser.username, id);
        setViewIds(new Set([...viewIds, id]));
    };

    if (!isLoaded) return <Loading />;

    return (
        <div className="App">
            <BrowserRouter>
                <UserContext.Provider   
                    value={{ currentUser, setCurrentUser, hasViewed }}
                >
                    <NavBar logout={logout} />
                    <Routes login={login} sign={signup} />
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
