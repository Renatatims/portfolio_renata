import React from "react";
import "../style/Navbar.css";
import "../style/style.css";

function Navbar({currentPage, handlePageChange}) {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
  <a className="navbar-brand" href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'navbar-brand active' : 'navbar-brand'}>Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About me</a>
      </li>
     
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#projects" id="navbarDropdownMenuLink" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} data-toggle="dropdown" aria-expanded="false">
		Projects
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#project1">GitHelpNow!</a>
          <a className="dropdown-item" href="#project2">AccountabiliBuddies</a>
          <a className="dropdown-item" href="#project3">Weather Dashboard</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

  );
}

export default Navbar;
