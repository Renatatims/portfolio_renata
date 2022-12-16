import React from "react";
import "../style/Navbar.css";
import "../style/style.css";

function Navbar() {
  return (
    <nav class="navigation" id="nav">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">
            home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#aboutme">
            about me
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">
            contact
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#projects"
            role="button"
            aria-expanded="false"
          >
            projects
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#project1">
                Project 1
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#project2">
                Project 2
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#project3">
                Project 3
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#project4">
                Project 4
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#project5">
                Project 5
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
