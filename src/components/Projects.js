import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Container, Row, Col, Card } from "react-bootstrap";
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
        {/*Project Map - get info from all projects and render in the following card format*/}
        {projectData.map((project, pkey) => (
          <Col key={pkey} id="projectCard">
            <Card>
              <img src={project.image} className="card-img-top" alt="..."></img>
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
