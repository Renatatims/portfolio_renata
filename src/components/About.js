import React from 'react';
import '../style/style.css';
import "../style/About.css";

function About() {
    return (
      <div className = "aboutMe">
      <h1>About Page</h1>
      <img id="profilepic" src={require('../assets/images/Profile.png')} alt="profile Renata Rondon"></img>
      <p>
      </p>
    </div>
    );
}
export default About;