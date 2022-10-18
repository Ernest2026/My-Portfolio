import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { ExternalLink } from "react-external-link";
// import { Link } from "react-router-dom";

function Projects(props) {
  return (
    <section className={`project ${props.theme}`} id="portfolio">
      <div className="project-container">
        <h1>Recent projects/blogs</h1>
        <div className="project-details">
          <div className="project-item">
            <div className="card-img">
              <img src="images/cozastore.png" alt="Project" />
              <ExternalLink
                href="https://github.com/Ernest2026/E-commerce"
                target="_blank"
                aria-label="Go to github"
              >
                <span className="project-icon">
                  <FaGithubSquare />
                </span>
              </ExternalLink>
            </div>
            <div className="card-body">
              <ExternalLink href="http://mdbh.herokuapp.com/" target="_blank">
                E-commerce Site
              </ExternalLink>
              <p>
                An e-commerce site with multiple functionalities including admin
                panel for creating, reducing, updating and deleting items etc...
              </p>
            </div>
          </div>
          <div className="project-item">
            <div className="card-img">
              <img src="images/groupcon.png" alt="Project" />
              <ExternalLink
                href="https://github.com/Ernest2026/groupcon-chatapp-frontend"
                target="_blank"
                aria-label="Go to github"
              >
                <span className="project-icon">
                  <FaGithubSquare />
                </span>
              </ExternalLink>
            </div>
            <div className="card-body">
              <ExternalLink
                href="https://group-con.herokuapp.com/"
                target="_blank"
              >
                Groupcon Chatapp
              </ExternalLink>
              <p>
                A chatapp developed majorly for having group convo's and the
                likes, and was built using graphql, nodejs and reactjs.
              </p>
            </div>
          </div>
          <div className="project-item">
            <div className="card-img">
              <img src="images/linkdb.png" alt="Project" />
              <ExternalLink
                href="https://github.com/Ernest2026/LinkDB"
                target="_blank"
                aria-label="Go to github"
              >
                <span className="project-icon">
                  <FaGithubSquare />
                </span>
              </ExternalLink>
            </div>
            <div className="card-body">
              <ExternalLink
                href="https://ernest2026.github.io/LinkDB/"
                target="_blank"
              >
                LinkDB
              </ExternalLink>
              <p>
                LinkDB: A comprehensive dataset of public LinkedIn members and companies
              </p>
            </div>
          </div>
        </div>
        <p className="project-link">
          <ExternalLink href="https://github.com/Ernest2026?tab=repositories">
            See all
          </ExternalLink>
        </p>
        {props.device ? (
          <p className="side">Projects</p>
        ) : (
          <p className="side">
            P<br />r<br />o<br />j<br />e<br />c<br />t<br />s
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
