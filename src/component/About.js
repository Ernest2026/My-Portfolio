import React from "react";

function About(props) {
  return (
    <section className={`about ${props.theme}`} id="about">
      <div className="about-container">
        <div className="about-details">
          <div className="about-item">
            <p>
              <span>3+</span>
              <br />
              Years
              <br />
              Experience
            </p>
          </div>
          <div className="about-item">
            <p>
              I'm a full stack web developer and a tech enthusiast, who loves
              building awesome, responsive and fascinating projects. I am more
              proficient in Mongodb, ExpressJs, ReactJs, Graphql and NodeJs. I
              have an eye for problem solving and also have the ability to adapt
              to new languages and tools.
            </p>
          </div>
          <div className="about-item">
            <p>
              <span>22+</span>
              <br />
              Project
              <br />
              Completed
            </p>
          </div>
        </div>
        {props.device ? (
          <p className="side">About Me</p>
        ) : (
          <p className="side">
            A<br />b<br />o<br />u<br />t<br /> <br />M<br />e
          </p>
        )}
      </div>
    </section>
  );
}

export default About;
