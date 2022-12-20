import React from "react";
import "../style/style.css";
import "../style/Projects.css";

function Projects() {
  return (
    <section className="container" id="projects">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card0Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card"></div>
            <div className="card-body">
              <p className="card-text">GitHelpNOW!</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card1Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card"></div>
            <div className="card-body">
              <p className="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card2Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card"></div>
            <div className="card-body">
              <p className="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card3Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card"></div>
            <div className="card-body">
              <p className="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card4Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card"></div>
            <div className="card-body">
              <p className="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card5Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card"></div>
            <div className="card-body">
              <p className="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
