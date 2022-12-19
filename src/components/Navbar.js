import React from "react";
import "../style/Navbar.css";
import "../style/style.css";

function Navbar({currentPage, handlePageChange}) {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light navigation">
  <a class="navbar-brand" href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'navbar-brand active' : 'navbar-brand'}>Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About me</a>
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#projects" id="navbarDropdownMenuLink" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} data-toggle="dropdown" aria-expanded="false">
		Projects
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#project1">GitHelpNow!</a>
          <a class="dropdown-item" href="#project2">AccountabiliBuddies</a>
          <a class="dropdown-item" href="#project3">Weather Dashboard</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

  );
}

export default Navbar;
