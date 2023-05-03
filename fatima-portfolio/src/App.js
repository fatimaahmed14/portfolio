import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Nav";
import Projects from "./pages/Projects";
import Techstack from "./pages/Techstack";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Techstack />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
