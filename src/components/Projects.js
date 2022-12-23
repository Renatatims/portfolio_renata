import React from "react";
import "../style/style.css";
import "../style/Projects.css";

//Projects displayed in cards - overlay applied over cards - mobile friendly
function Projects() {
  return (
    <section className="container" id="projects">
      <div className="row" id="projectsDiv">
        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card0Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://renatatims.github.io/GitHelpNOW/index.html"
                target="_blank"
              >
                GitHelpNOW!
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/GitHelpNOW"
                target="_blank"
              >
                Github Repo 
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">GitHelpNOW!</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card5Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://renata-jate-text-editor.herokuapp.com/"
                target="_blank"
              >
                Text Editor JATE
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/text_editor_pwa"
                target="_blank"
              > Github Repo </a>
            </div>
            <div className="card-body">
              <p className="card-text">Text Editor JATE</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card1Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://github.com/Renatatims/AccountabiliBuddies"
                target="_blank"
              >
                AccountabiliBuddies
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card2Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href=" https://github.com/Renatatims/note_taker"
                target="_blank"
              >
                Note Taker
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/note_taker"
                target="_blank"
              > Github Repo </a>
            </div>
            <div className="card-body">
              <p className="card-text">Note Taker</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card3Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://renatatims.github.io/weather_dashboard/"
                target="_blank"
              >
                Weather Dashboard
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/weather_dashboard"
                target="_blank"
              > Github Repo </a>
            </div>
            <div className="card-body">
              <p className="card-text">Weather Dashboard</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card4Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://github.com/Renatatims/social_networkAPI"
                target="_blank"
              >
                Social Network API
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">Social Network API</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
export default Projects;
