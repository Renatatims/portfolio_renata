import React from "react";
import { Modal, Button } from "react-bootstrap";

function ProjectModal(props) {
  return (
    <Modal 
    show={props.show} 
    onHide={props.handleClose} 
    size="md" 
    centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Description: {props.description} </Modal.Body>
      <Modal.Body>Technologies: {props.technologies} </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" href={props.appLink} target="_blank">
          Visit App
        </Button>
        <Button variant="primary" href={props.gitHubUrl} target="_blank">
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
