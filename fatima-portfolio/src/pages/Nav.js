import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [showSections, setShowSections] = useState(false);

  const toggleSections = () => {
    setShowSections(!showSections);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav-bar">
      <button onClick={toggleSections}>❓</button>
      {showSections && (
        <div className="pop-out-sections">
          <button onClick={() => scrollToSection("about-section")}>
            About
          </button>
          <button onClick={() => scrollToSection("tech-stack-section")}>
            Tech-stack
          </button>
          <button onClick={() => scrollToSection("projects-section")}>
            Projects
          </button>
          <button onClick={() => scrollToSection("contact-section")}>
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
