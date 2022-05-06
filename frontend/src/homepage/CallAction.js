import React from "react";
import { Link } from "react-router-dom";
const CallAction = () => {

    return (
        <section className="call-action">
            <div className="container text-center">
                <h3>Always Free. Play More Today </h3>
                <h4>Learn How To Play. Click here</h4>
                <form>
                    <button>
                        <Link to="/rule">icon</Link>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CallAction;