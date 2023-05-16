import Navbar from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Techstack from "./pages/Techstack";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <body>
      <Navbar />
      <div id="home-section">
        <Home />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="tech-stack-section">
        <Techstack />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </body>
  );
}

export default App;
