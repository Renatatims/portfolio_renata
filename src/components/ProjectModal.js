import React from "react";
import { Modal } from "react-bootstrap";

function ProjectModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="md"
      centered
    >  
    <Modal.Title>Title</Modal.Title>
    </Modal>
  );
}

export default ProjectModal;