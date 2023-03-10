import React from "react";
import "../style/Home.css";
import "../style/style.css";

//Main Page with profile Picture
function Home() {
  return (
    <div className="headerH1 jumbotron" id="home">
      <h1 className="display-4"> Hello World, I am Renata Rondon </h1>
      <p> Full-Stack Web Developer</p>
      <img
        id="profilepic"
        src={require("../assets/images/Profile.png")}
        alt="profile Renata Rondon"
      ></img>
    </div>
  );
}

export default Home;
