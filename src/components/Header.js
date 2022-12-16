import React from 'react';
import '../style/Header.css';

function Header() {
    return (
        <div class="headerH1">
                <h1> Hello, I am Renata Rondon </h1>
                <p> Future <span id="web"><strong> Web Developer </strong> </span> </p>
                <img id="profilepic" src={require('../assets/images/Profile.png')} alt="profile Renata Rondon"></img>
            </div>
    
      );
    }
    
    export default Header;