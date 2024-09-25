import React from "react";
import "../style/style.css";
import "../style/About.css";

//About Me page
function About() {
  return (
    <div className="aboutMe">
      <h1 id="aboutTitle">About Page</h1>
      <p id="aboutText">
        Hello, I am Renata Rondon, Full-Stack Web Developer, passionate for coding! I have a Bachelor's
        in Environmental Engineering and for the past 4 years I have worked as a
        Purchasing Manager for a cruise company. I recently got my certificate in Full-Stack Web Development from UC
        Berkeley and I am looking for oportunities to start my new path as a Software Engineer. 
      </p>
      <img
        id="profilepic"
        src={require("../assets/images/Profile.png")}
        alt="profile Renata Rondon"
      ></img>
    </div>
  );
}
export default About;
