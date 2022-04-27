import React from "react";
import { Link } from "react-router-dom";


const Features = ({ features }) => {
    return (
        <div id="features">
            <div className="container">
                <div className="features">
                    <h2>Features</h2>
                </div>
                <div className="row">
                    {features.map((d, i) => (
                        <div key={`${d.title}-${i}`} className="">
                            <Link   
                                className="feautures-link"
                                to={`/categories/${d.title.toLowerCase()}`}
                            >
                                <i className={d.icon}></i>
                                <h3>{d.title}</h3>
                            </Link>
                            <p>{d.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;