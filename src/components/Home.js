import React from 'react';
import '../style/Home.css';
import '../style/style.css';

function Home() {
    return (
        <div className="headerH1 jumbotron" id="home">
            <h1 className="display-4"> Hello, I am Renata Rondon </h1>
            <p> Future <span id="web"><strong> Web Developer </strong> </span> </p>
            <img id="profilepic" src={require('../assets/images/Profile.png')} alt="profile Renata Rondon"></img>
        </div>
    
      );
    }
    
    export default Home;