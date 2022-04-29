import React from "react";
import { Database, Search, Theme, Code } from "./icons/Svg";

function Services(props) {
  return (
    <section className={`services ${props.theme}`} id="services">
      <div className="services-container">
        <div className="services-header">
          <h1>Core skills</h1>
          <p>
            Need a website with any of this functionality below, don't hesitate
            to reach out to me...
          </p>
        </div>
        <div className="services-details">
          <div className="item">
            <span>
              {/* <img src="images/code.png" alt="Code icon" /> */}
              <Code />
            </span>
            <h2 className="h3">Responsive design</h2>
            <p>
              I love building websites that look great on all devices. When
              building my site, my main purpose is to make sure the user is
              satisfied, and I achieve this using otimized image, media query,
              adding awesome animations and microinteraction.
            </p>
          </div>
          <div className="item">
            <span>
              {/* <img src="images/theme.svg" alt="Code icon" /> */}
              <Theme />
            </span>
            <h2 className="h3">UI/UX Design</h2>
            <p>
              I gained little knowledge in this field after few months of
              intensive learning. Before designing, prototyping, or wireframing
              I always try to interact with my audience, so I'll have an idea of
              what they want and need, before I actually go into the design
              process.
            </p>
          </div>
          <div className="item">
            <span>
              {/* <img src="images/search.svg" alt="Code icon" /> */}
              <Search />
            </span>
            <h2 className="h3">SEO Optimization</h2>
            <p>
              I believe one major aim of any online firm is to increase site
              visibility and ranking on Google, and I do achieve this goal by
              implementing techniques like syndication, XML site maps, link
              building, target keywords and social media optimization.
            </p>
          </div>
          <div className="item">
            <span>
              {/* <img src="images/database.svg" alt="Code icon" /> */}
              <Database />
            </span>
            <h2 className="h3">Backend development</h2>
            <p>
              I am passionate about the backend because it make me able to
              develop very useful api's. In building my backend, I always make
              my code concise, reuseable and secured. And I make use both
              relational and non-relational database for storing data's.
            </p>
          </div>
        </div>
        {props.device ? (
          <p className="side">Services</p>
        ) : (
          <p className="side">
            S<br />e<br />r<br />v<br />i<br />c<br />e<br />s<br />
          </p>
        )}
      </div>
    </section>
  );
}

export default Services;
