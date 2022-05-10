import React from "react";
import { useHistory } from "react-router-dom";

const CallAction = ({ login }) => {
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        await login({
            username: "testuser",
            password: "password",
        });
        history.push("/categories");
    }

    return (
        <section className="call-action">
            <div className="container">
                <h3>Always Free. Learn More Today (need to edit)</h3>
                <form onSubmit={handleSubmit}>
                    <button>
                        <i></i>TRY IT OUT
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CallAction;