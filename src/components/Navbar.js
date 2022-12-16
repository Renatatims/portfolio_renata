import React from 'react';
import '../style/Navbar.css';
import '../style/style.css';

function Navbar() {
    return (
      <nav class="navigation" id="nav">
              <a href="#nav">home</a>
              <a href="#contact">contact</a>
              <a href="#aboutme">about me </a>
              <div class="dropdown">
                  <button class="dropbtn">
                      <a href="#projects">projects</a>
                      <i class="down"></i>
                  </button>
                  <div class="dropdown-content">
                      <a href="#project1">Project 1</a>
                      <a href="#project2">Project 2</a>
                      <a href="#project3">Project 3</a>
                      <a href="#project4">Project 4</a>
                      <a href="#project5">Project 5</a>
                  </div>
              </div>
          </nav>
    
    );
  }
  
  export default Navbar;