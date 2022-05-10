import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../UserContext";


const Header = ({ login }) => {
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        await login({
            username: "testuser",
            password: "password",
        });
        history.push("/categories");
    }

    // authentication stuff
    const { currentUser } = useContext(UserContext);

    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="intro-text">
                                <div className="intro-center">
                                    <h1>Let's play the game</h1>
                                    <p>
                                        Bring fun and memory time to your friends and family
                                    </p>

                                    {!currentUser && (
                                        <a  
                                            href="/signup"
                                            role="button"
                                            className="btn btn-success btn-lg"
                                        >
                                            <i></i> GET STARTED   
                                        </a>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <button>
                                            <i></i> TRY IT OUT
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;