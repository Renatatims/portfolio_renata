import React from "react";
import "../style/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Footer - icons added using FontAwesome package
function Footer() {
  return (
    <footer id="footer">
      <ul className="contact-icons">
        <li className="icons">
          <a href="tel:2064714644">
            <FontAwesomeIcon icon={faPhone} size="4x" />
          </a>
        </li>
        <li className="icons">
          <a href="mailto: renatatims@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="5x" />
          </a>
        </li>
        <li className="icons">
          <a href="https://github.com/Renatatims" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="5x" />
          </a>
        </li>
        <li className="icons">
          <a
            href="https://www.linkedin.com/in/renata-tims-rondon/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="5x" />
          </a>
        </li>
      </ul>
      <h5> © Renata Rondon 2024 </h5>
    </footer>
  );
}

export default Footer;
