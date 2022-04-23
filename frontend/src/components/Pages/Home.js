import React from "react";
import Header from "./Header";
import Features from "./Features";
import About from "./About";
import CallAction from "./CallAction";
import features from "./featureList";


const Home = ({ login }) => {
    return (
        <>
            <Header login={login} />
            <Features features={features} />
            <About />
            <CallAction login={login} />
        </>
    );
};

export default Home;