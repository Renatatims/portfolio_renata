import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import "../style/style.css";
import "../style/Projects.css";

//Projects displayed in cards - overlay applied over cards - mobile friendly
function Projects() {
  //Modal - useState
  const [modalShow, setModalShow] = useState(false)
  //Projects - useState
  const [project, setProject] = useState({});

  //Open Modal
  const handleOpenModal = (title, image, description, technologies, appLink, gitHubUrl) => {
    setProject({ title, image, description, technologies, appLink, gitHubUrl });
    setModalShow(true);
  };

  //Close Modal
  const handleCloseModal = () => {
    setModalShow(false);
  };

  return (
    <section className="container" id="projects">
      <div className="row" id="projectsDiv">
        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/card6Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card" onClick={() => handleOpenModal(
              "PhilanthroMe",
              require("../assets/cardImages/card6Preview.PNG"),
              "A donation platform for non-profit organizations.",
              "React App, MERN Application",
              "https://philanthro-me.herokuapp.com/",
              "https://github.com/Renatatims/philanthro-me"

            )}>
              <a
                id="overlay-text1"
                href="https://philanthro-me.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                PhilanthroMe
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/philanthro-me"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo 
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">PhilanthroMe</p>
            </div>
          </div>
        </div>
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
                rel="noreferrer"
              >
                GitHelpNOW!
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/GitHelpNOW"
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
              >
                Text Editor JATE
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/text_editor_pwa"
                target="_blank"
                rel="noreferrer"
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
                href="https://accountabili-buddies-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                AccountabiliBuddies
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/AccountabiliBuddies"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
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
                href=" https://renata-note-taker.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Note Taker
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/note_taker"
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
              >
                Weather Dashboard
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/weather_dashboard"
                target="_blank"
                rel="noreferrer"
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
              src={require("../assets/cardImages/card7Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://renata-book-search.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Book Search
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/Renatatims/book_search"
                target="_blank"
                rel="noreferrer"
              > Github Repo </a>
            </div>
            <div className="card-body">
              <p className="card-text">Book Search</p>
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
                rel="noreferrer"
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
      <ProjectModal 
      show={modalShow} 
      handleClose={handleCloseModal}
      title={project.title}
      image={project.image}
      description={project.description}
      technologies={project.technologies}
      appLink={project.appLink}
      gitHubUrl={project.gitHubUrl}/>
    </section>
  );
}
export default Projects;
