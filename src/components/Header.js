import React from 'react';
import '../style/Header.css';
import '../style/style.css';

function Header() {
    return (
        <div class="headerH1 jumbotron">
            <h1 class="display-4"> Hello, I am Renata Rondon </h1>
            <p> Future <span id="web"><strong> Web Developer </strong> </span> </p>
            <img id="profilepic" src={require('../assets/images/Profile.png')} alt="profile Renata Rondon"></img>
        </div>
    
      );
    }
    
    export default Header;