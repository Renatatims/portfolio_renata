import React from 'react';
import ReactDOM from 'react-dom';
import '../style/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPhone, faEnvelope} from  "@fortawesome/free-solid-svg-icons"
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"


function Contact() {
    return (
        <section id="contact" class="section">
        <h2 id="contact-name"> <a href="#nav"> Renata Rondon </a> </h2>
        <div id="contact-line">

        </div>

        <h3>Contact me:</h3>
        <ul class="contact-icons">
            <li class="icons"> 
                <a><FontAwesomeIcon icon={faPhone} size= "3x"/></a>
                <p>000-XXX-XXXX</p>
            </li>
            <li class="icons"> 
                <a href="https://github.com/Renatatims" target="_blank"> <FontAwesomeIcon icon={faEnvelope} size= "3x"/></a>
                <p>@gmail.com</p>
                
            </li>
            <li class="icons">
                <a href="https://github.com/Renatatims" target="_blank"><FontAwesomeIcon icon={faGithub} size= "3x" /></a>
                
            </li>
            <li class="icons">
                <a href="https://www.linkedin.com/"  target="_blank"><FontAwesomeIcon icon={faLinkedin} size= "3x"  /></a>
                
            </li>
        </ul>
        </section>
    );
}
export default Contact;