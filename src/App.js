import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;