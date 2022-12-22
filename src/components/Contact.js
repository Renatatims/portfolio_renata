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

    //Handle Form Submit - user input info can be seen in the console
   
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log("Handle Form", form);
        }   
    }

    // Handle Input Change function
    const handleInputChange = (e) => {
        const { target } = e;
        const inputName= target.name;
        const inputValue = target.value;

    //Validate e-mail using helper with email Regex 
    if (inputName === 'email') {
        if (!validateEmail(inputValue)){
            setErrorMessage("Invalid email");
        } else {
            setErrorMessage('');
        }
    // Validate the name input - user must enter a name
      } else {
        if (!inputValue.length) {
            setErrorMessage("Name is required");
          } else {
            setErrorMessage('');
      } 
     }

     //If there are no error messages, than info will be sent to setForm object
     if (!errorMessage){
        setForm({...form, [inputName]: inputValue});
        //console.log(form);
     }
    };
    
  //Contact Form:
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
    </section>
  );
}
export default Contact;
