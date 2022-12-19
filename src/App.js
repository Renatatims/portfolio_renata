import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Contact />
      <About />
      <Projects />
      <Footer />  
    </div>
  );
}

export default App;