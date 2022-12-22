import React, { useState } from 'react';
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Resume from "./Resume";


export default function PortfolioPages() {
  const [currentPage, setCurrentPage] = useState('Home');

  //Method to check the currentPage value, depending on the tab selected it will render a specific page
  const renderPage = () => {
    if (currentPage === 'Home') {
        return <Home />;
      }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};
