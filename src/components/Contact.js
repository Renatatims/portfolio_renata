import React, { useState } from 'react';
import "../style/Contact.css";
//Helper to validate the user's email input
import { validateEmail } from "../utils/helpers";
import '../style/style.css';

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
        if (!errorMessage) {
            console.log("Handle Form", form);
            setErrorMessage("Message Sent!")
        }   
        //setForm (...(''));
    }
    const handleInputChange = (e) => {
        const { target } = e;
        const inputName= target.name;
        const inputValue = target.value;
    if (inputName === 'email') {
        if (!validateEmail(inputValue)){
            setErrorMessage("Invalid email");
        } else {
            setErrorMessage('');
        }
       
      } else {
        if (!inputValue.length) {
            setErrorMessage("Name is required");
          } else {
            setErrorMessage('');
      } 
     }
     if (!errorMessage){
        setForm({...form, [inputName]: inputValue});
        //console.log(form);
     }
    };

  return (
    <section className="contact">
      <div id="contact-line"></div>
      <h3>Contact me :</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            defaultValue={name}
            name="name"
            type="text"
            className="form-control"
            onChange={handleInputChange}
            id="name"
            placeholder="name"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            defaultValue={email}
            name="email"
            type="email"
            className="form-control"
             onBlur={handleInputChange}
            id="email"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            defaultValue={message}
            name="message"
            type="text"
            className="form-control"
            onChange={handleInputChange}
            id="message"
            rows="3"
          ></textarea>
        </div>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
        )}
        <button type="submit" className="btn btn-secondary mb-2">Submit</button>

      </form>
      {/*
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
        */}
    </section>
  );
}
export default Contact;
