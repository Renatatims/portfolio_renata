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
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>Description</Modal.Body>
      <Modal.Body>Technologies</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" href="/" target="_blank">
          Visit App
        </Button>
        <Button variant="primary" href="/" target="_blank">
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
