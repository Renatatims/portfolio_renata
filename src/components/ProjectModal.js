import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../style/style.css";
import "../style/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "react-bootstrap/Image";

function ProjectModal(props) {
    console.log(props);
  return (
    <Modal show={props.show} onHide={props.handleClose} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <a
            href={props.appLink}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            {props.title}
          </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
      <a
          href={props.appLink}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "black",
            justifyContent: "center",
            margin: "10px",
          }}
        >
        <Image
          src={props.image}
          style={{ margin: "10px", width: "90%"}}
        ></Image>
        </a>
        <a
          href={props.gitHubUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "black",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </Modal.Body>
      <Modal.Body>
        <span style={{ fontWeight: "bold" }}>Description:</span>
        {props.description}
      </Modal.Body>
      <Modal.Body>
        <span style={{ fontWeight: "bold" }}>Technologies:</span>
        {props.technologies}
      </Modal.Body>

      <Modal.Footer>
        <Button id="modal-btn" href={props.appLink} target="_blank">
          Visit App
        </Button>
        <Button id="modal-btn" href={props.gitHubUrl} target="_blank">
          Github Repo
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
