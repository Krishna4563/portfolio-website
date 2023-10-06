import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import Project from "./components/Projects/projects";
import Skills from "./components/Skill/skill";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
