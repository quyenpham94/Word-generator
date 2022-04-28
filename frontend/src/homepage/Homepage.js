import React from "react";

// import Features from "./Features";
import About from "./About";
import CallAction from "./CallAction";
// import features from "./featureList";


const Homepage = ({ login }) => {
    return (
        <>
            
            {/* <Features features={features} /> */}
            <About />
            <CallAction login={login} />
        </>
    );
};

export default Homepage;