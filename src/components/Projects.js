import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../style/style.css";
import "../style/Projects.css";
import { projectData } from "../utils/projectsData";

//Projects displayed in cards - overlay applied over cards - mobile friendly
function Projects() {
  //Modal - useState
  const [modalShow, setModalShow] = useState(false);
  //Projects - useState
  const [project, setProject] = useState({});

  //Open Modal
  const handleOpenModal = (
    title,
    image,
    description,
    technologies,
    appLink,
    gitHubUrl
  ) => {
    setProject({ title, image, description, technologies, appLink, gitHubUrl });
    setModalShow(true);
  };

  //Close Modal
  const handleCloseModal = () => {
    setModalShow(false);
  };

  return (
    <Container id="projects">
    
    {/*Projects Cards*/}
    <Row xs={1} md={2} lg={3} id="projectsDiv"> 

     {/*Project 1*/}
     {projectData.map((project, pkey) => (
     <Col key={pkey} id="projectCard">
       <Card >
         <img
           src={project.image}
           className="card-img-top"
           alt="..."
         ></img>
         <div
           className="overlay-card"
           onClick={() =>
             handleOpenModal(
              `${project.title}`,
              `${project.image}`,
              `${project.description}`,
              `${project.technologies}`,
              `${project.appLink}`,
              `${project.gitHubUrl}`,

               "React App, MERN Application",
               "https://philanthro-me.herokuapp.com/",
               "https://github.com/Renatatims/philanthro-me"
             )
           }
         >
           <p id="overlay-text1">{project.title}</p>
           <p id="overlay-text2"> More info . . . </p>
         </div>
         <div className="card-body">
           <p className="card-text">{project.title}</p>
         </div>
       </Card>
     </Col>
      ))}
     </Row>

      {/*Projects Cards*/}
      <Row xs={1} md={2} lg={3} id="projectsDiv">
     

        {/*Project 1*/}
        <Col id="projectCard">
          <Card >
            <img
              src={require("../assets/cardImages/card6Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div
              className="overlay-card"
              onClick={() =>
                handleOpenModal(
                  "PhilanthroMe",
                  require("../assets/cardImages/card6Preview.PNG"),
                  "A donation platform for non-profit organizations.",
                  "React App, MERN Application",
                  "https://philanthro-me.herokuapp.com/",
                  "https://github.com/Renatatims/philanthro-me"
                )
              }
            >
              <p id="overlay-text1">PhilanthroMe</p>
              <p id="overlay-text2"> More info . . . </p>
            </div>
            <div className="card-body">
              <p className="card-text">PhilanthroMe</p>
            </div>
          </Card>
        </Col>

        {/*Project 2*/}
        <Col id="projectCard">
          <Card >
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
          </Card>
        </Col>

        {/*Project 3*/}
        <Col id="projectCard">
          <Card >
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
              >
                {" "}
                Github Repo{" "}
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">Text Editor JATE</p>
            </div>
          </Card>
        </Col>

        {/*Project 4*/}
        <Col id="projectCard">
          <Card >
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
          </Card>
        </Col>

        {/*Project 5*/}
        <Col id="projectCard">
          <Card >
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
              >
                {" "}
                Github Repo{" "}
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">Note Taker</p>
            </div>
          </Card>
        </Col>

        {/*Project 6*/}
        <Col id="projectCard">
          <Card >
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
              >
                {" "}
                Github Repo{" "}
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">Weather Dashboard</p>
            </div>
          </Card>
        </Col>

        {/*Project 7*/}
        <Col id="projectCard">
          <Card >
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
              >
                {" "}
                Github Repo{" "}
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">Book Search</p>
            </div>
          </Card>
        </Col>

        {/*Project 8*/}
        <Col id="projectCard">
          <Card >
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
          </Card>
        </Col>

        {/*Project 1*/}
        <Col id="projectCard">
          <Card >
            <img
              src={require("../assets/cardImages/card6Preview.PNG")}
              className="card-img-top"
              alt="..."
            ></img>
            <div
              className="overlay-card"
              onClick={() =>
                handleOpenModal(
                  "PhilanthroMe",
                  require("../assets/cardImages/card6Preview.PNG"),
                  "A donation platform for non-profit organizations.",
                  "React App, MERN Application",
                  "https://philanthro-me.herokuapp.com/",
                  "https://github.com/Renatatims/philanthro-me"
                )
              }
            >
              <p id="overlay-text1">PhilanthroMe</p>
              <p id="overlay-text2"> More info . . . </p>
            </div>
            <div className="card-body">
              <p className="card-text">PhilanthroMe</p>
            </div>
          </Card>
        </Col>

       </Row>

      {/*Project Modal properties*/}
      <ProjectModal
        show={modalShow}
        handleClose={handleCloseModal}
        title={project.title}
        image={project.image}
        description={project.description}
        technologies={project.technologies}
        appLink={project.appLink}
        gitHubUrl={project.gitHubUrl}
      />
   
    </Container>
  );
}
export default Projects;
