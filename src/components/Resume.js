import React from "react";
import "../style/style.css";
import "../style/Resume.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Resume() {
  return (
    <div className="aboutMe">
      <Card bg="dark">
      <Card.Header as="h5">Resume</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
        Please checkout my resume on my linkedin page
        </Card.Text>
        <a href="https://www.linkedin.com/in/renata-tims-rondon-76a0618a/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="5x" /></a>
      </Card.Body>
    </Card>

            
     <CardGroup >
      <Card bg="light">
        <Card.Body className ="skillsCard">
          <Card.Title className="skillsTitle">Front-end Skills</Card.Title>
          <Card.Text>
          <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light">
        <Card.Body className ="skillsCard">
          <Card.Title className="skillsTitle">Back-end Skills</Card.Title>
          <Card.Text>
          <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
    </div>
  );
}
export default Resume;
