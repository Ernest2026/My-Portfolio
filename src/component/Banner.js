import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import Button from "./Button";

function Banner(props) {
  return (
    <section className={`banner ${props.theme}`} id="banner">
      <div className="banner-container">
        <div className="banner-text">
          <p>
            Hi<span className="waving">🖐</span>, I'm
            <br />
            <span>Chidiebere Ernest</span>
            <br />a full-stack developer...
          </p>
          <span className="banner-btn">
            <HashLink smooth to="#contact">
              <Button buttonStyle="btn-success">
                Book me now <FaArrowRight />
              </Button>
            </HashLink>
          </span>
        </div>
        <div className="banner-illustration">
          <img
            src="images/illustration.png"
            className="illustration"
            alt="A man using his pc illustration"
            height="530px"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
