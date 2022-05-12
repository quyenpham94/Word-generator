import React from "react";
import { Link } from "react-router-dom";
const CallAction = () => {

    return (
        <section className="call-action">
            <div className="container text-center">
                <div>
                <h5>Simply create your account in order to use our available 
                    objects. You also can create your own objects with various 
                    new words that are suitable for your team and your family
                </h5>
                </div>

                    <h4>Always Free. Play More Today</h4>
                    <p>Learn How To Play. Click here</p>
 
                <form>
                    
                        <Link to="/rule"><button>Here</button></Link>
                    
                </form>
            </div>
        </section>
    );
};

export default CallAction;