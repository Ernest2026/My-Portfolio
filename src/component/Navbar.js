import React from "react";
import { HashLink } from "react-router-hash-link";
import Button from "./Button";
import "../App.css";
import { Logo } from "./icons/Svg";

function Navbar(props) {
  return (
    <nav className={props.theme}>
      <div className="nav-container">
        <div className="nav-logo">
          <Logo />
        </div>
        {props.device ? (
          <>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              style={{ display: "none" }}
            />
            <label htmlFor="checkbox" className="menu">
              <span className="menu-icon" aria-label="Menu icon"></span>
            </label>
          </>
        ) : (
          ""
        )}
        <div className="nav-links">
          <ul>
            <li>
              <HashLink smooth to="#about" className="nav-link">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#services" className="nav-link">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#portfolio" className="nav-link">
                Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact" className="nav-link">
                Contact
              </HashLink>
            </li>
          </ul>
          {props.device ? (
            <HashLink smooth to="#">
              <Button buttonStyle="btn-outline">Resume</Button>
            </HashLink>
          ) : (
            ""
          )}
        </div>
        {props.device ? (
          ""
        ) : (
          <div className="nav-btn">
            <HashLink smooth to="#">
              <Button buttonStyle="btn-outline">Resume</Button>
            </HashLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
