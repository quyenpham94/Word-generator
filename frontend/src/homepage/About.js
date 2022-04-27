import React from "react";
// import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="images/about.jpg"
              className="img-responsive"
              alt="Reading Toddler"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About</h2>
              <p>Hi there! Thanks for checking this out.</p>
              <p>
                I created this app for my final project at a coding bootcamp,
                and beside the motivation to help entertain people when participating 
                in fun activities.
              </p>
              <p>Hope everyone enjoy it!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;