import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaDev,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import { ExternalLink } from "react-external-link";
import { HashLink } from "react-router-hash-link";
import Button from "./Button";
import { Logo } from "./icons/Svg";

function Footer(props) {
  return (
    <footer className={props.theme}>
      <div className="footer-container">
        <div className="item">
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="social-links">
            <span>
              <ExternalLink
                href="http://www.github.com/Ernest2026"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </ExternalLink>
            </span>
            <span>
              <ExternalLink
                href="https://twitter.com/Ernesto_tech"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </ExternalLink>
            </span>
            <span>
              <ExternalLink
                href="https://www.linkedin.com/in/chidiebere-ernest-1078321ba/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </ExternalLink>
            </span>
            <span>
              <ExternalLink
                href="https://dev.to/ernest2026/"
                target="_blank"
                aria-label="Dev"
              >
                <FaDev />
              </ExternalLink>
            </span>
            <span>
              <ExternalLink
                href="mailto:chidiebereernest8@gmail.com"
                target="_blank"
                aria-label="Gmail"
              >
                <FaMailBulk />
              </ExternalLink>
            </span>
          </div>
        </div>
        <div className="item">
          <div>
            <p>
              <HashLink smooth to="#about" className="footer-link">
                About
              </HashLink>
            </p>
            <p>
              <HashLink smooth to="#portfolio" className="footer-link">
                Portfolio
              </HashLink>
            </p>
          </div>
          <div>
            <p>
              <HashLink smooth to="#services" className="footer-link">
                Services
              </HashLink>
            </p>
            <p>
              <HashLink smooth to="#contact" className="footer-link">
                Contact
              </HashLink>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="footer-btn">
            <HashLink smooth to="#">
              <Button buttonStyle="btn-outline">Resume</Button>
            </HashLink>
          </div>
          {props.device ? (
            ""
          ) : (
            <div className="copyright">
              <p>@ Ernesto. All right reserved.</p>
            </div>
          )}
        </div>
        {props.device ? (
          <div className="copyright">
            <p>@ Ernesto. All right reserved.</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </footer>
  );
}

export default Footer;
