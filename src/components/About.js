import React from "react";
import "../style/style.css";
import "../style/About.css";

function About() {
  return (
    <div className="aboutMe">
      <h1 id="aboutTitle">About Page</h1>
      <p id="aboutText">
        Hello, I am Renata Rondon, Full-Stack Web developer. I have a Bachelor's
        in Environmental Engineering and for the past 4 years I have worked as a
        Purchasing Manager for a cruise company. I am currently enrolled in UC
        Berkeley Full- Stack coding bootcamp and I am looking for oportunities
        to start my new path as software developer.
      </p>
      <img
        id="profilepic"
        src={require("../assets/images/Profile.png")}
        alt="profile Renata Rondon"
      ></img>
      <p></p>
    </div>
  );
}
export default About;
