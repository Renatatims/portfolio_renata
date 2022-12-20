//import React from 'react';
//import ReactDOM from "react-dom";
import React, { useState } from 'react';
import "../style/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
//Helper to validate the user's email input
import { validateEmail } from "../utils/helpers";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    const { name, email, message } = form;
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid',{errorMessage});
          return;
        }
        setForm('');
        console.log("Info submitted!")
    }

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    if (inputType === 'email') {
        setForm(inputValue);
      } else if (!inputValue.length) {
        setErrorMessage("Name is required");
      } else {
        setErrorMessage('');
      }
    }

  return (
    <section id="contact" className="section">
      <h2 id="contact-name">
        {" "}
        <a href="#nav"> Renata Rondon </a>{" "}
      </h2>
      <div id="contact-line"></div>
      <h3>Contact me:</h3>
      <form>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            value={email}
            name="email"
            type="email"
            className="form-control"
            onChange={handleInputChange}
            id="email"
            placeholder="name@example.com"
          ></input>
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            value={name}
            name="name"
            type="text"
            className="form-control"
            onChange={handleInputChange}
            id="name"
            placeholder="name"
          ></input>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            value={message}
            name="message"
            type="text"
            className="form-control"
            onChange={handleInputChange}
            id="message"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-secondary mb-2" onSubmit={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      
      <ul className="contact-icons" >
        <li className="icons">
          <a>
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
        </li>
        <li className="icons">
          <a href="https://github.com/Renatatims" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </li>
        <li className="icons">
          <a href="https://github.com/Renatatims" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li className="icons">
          <a href="https://www.linkedin.com/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
      </ul>
     
    </section>
  );
}

export default Contact;
