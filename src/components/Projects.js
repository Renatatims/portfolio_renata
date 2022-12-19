import React from "react";
import "../style/style.css";
import "../style/Projects.css";

function Projects() {
  return (
    <section class="container" id="projects">
      <div class="row">
        <div class="col">
          <div class="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card0Preview.PNG")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="overlay-card"></div>
            <div class="card-body">
              <p class="card-text">GitHelpNOW!</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card1Preview.PNG")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="overlay-card"></div>
            <div class="card-body">
              <p class="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card2Preview.PNG")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="overlay-card"></div>
            <div class="card-body">
              <p class="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card3Preview.PNG")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="overlay-card"></div>
            <div class="card-body">
              <p class="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card4Preview.PNG")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="overlay-card"></div>
            <div class="card-body">
              <p class="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card5Preview.PNG")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="overlay-card"></div>
            <div class="card-body">
              <p class="card-text">AccountabiliBuddies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
