import React from "react";
import Header from "./Header";
import Features from "./Features";
import About from "./About";
import CallAction from "./CallAction";


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