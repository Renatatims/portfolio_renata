//import React from 'react';
import ReactDOM from "react-dom";
import "../style/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
//Helper to validate the user's email input
import { validateEmail } from "../utils/helpers";

function Contact() {
  return (
    <section id="contact" class="section">
      <h2 id="contact-name">
        {" "}
        <a href="#nav"> Renata Rondon </a>{" "}
      </h2>
      <div id="contact-line"></div>
      <h3>Contact me:</h3>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-secondary mb-2">Submit</button>
      </form>
      
      <ul class="contact-icons" >
        <li class="icons">
          <a>
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
        </li>
        <li class="icons">
          <a href="https://github.com/Renatatims" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </li>
        <li class="icons">
          <a href="https://github.com/Renatatims" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li class="icons">
          <a href="https://www.linkedin.com/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
      </ul>
     
    </section>
  );
}
export default Contact;
