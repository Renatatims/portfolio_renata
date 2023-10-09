import React from "react";
import { useState} from "react"; // import state
import "../style/Navbar.css";
import "../style/style.css";
//import Navbar elements from react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

//Navbar - switch between pages Home, ABout Me, Contact and Resume -
//Hamburguer menu available for mobile - left side navigation

function NavigationBar({ currentPage, handlePageChange }) {
  const [show, setShow] = useState(false);

  function toggleNavbar() {
    setShow(!show);
  }

  // Function to close the navbar on small screens
  function closeNavbarOnSmallScreens() {
    if (window.innerWidth <= 768) {
      setShow(false);
    }
  }

  return (
    <>
      <Navbar expand="md" className="mb-3" id="navigationBar">
        <Container fluid>
          <Navbar.Brand
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={
              currentPage === "Home" ? "navbar-brand active" : "navbar-brand"
            }
          >
            Home
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={toggleNavbar}
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas
            show={show}
            onHide={toggleNavbar}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="sideNavTitle"
                id="offcanvasNavbarLabel"
              >
                <Nav.Link
                  href="#home"
                  onClick={() => {
                    handlePageChange("Home");
                    toggleNavbar();
                  }}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  Renata Rondon
                </Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-left flex-grow-1 pe-3">
                <Nav.Link
                  id="navElement"
                  href="#About"
                  onClick={() => {
                    handlePageChange("About");
                    closeNavbarOnSmallScreens(); 
                  }}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  id="navElement"
                  href="#Contact"
                  onClick={() => {
                    handlePageChange("Contact");
                    closeNavbarOnSmallScreens()
                  }}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  id="navElement"
                  href="#Projects"
                  onClick={() => {
                    handlePageChange("Projects");
                    closeNavbarOnSmallScreens()
                  }}
                  className={
                    currentPage === "Projects" ? "nav-link active" : "nav-link"
                  }
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  id="navElement"
                  href="#Resume"
                  onClick={() => {
                    handlePageChange("Resume");
                    closeNavbarOnSmallScreens()
                  }}
                  className={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
