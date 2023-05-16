import "../App.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav-bar">
      <button onClick={() => scrollToSection("about-section")}>About</button>
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
  );
}

export default Navbar;
