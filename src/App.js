import React from "react";
// import ProjectInfo from "./components/ProjectInfo";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/";

function App() {
  return (
    <div className="main">
      {/* <ProjectInfo /> */}
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
      </footer>
    </div>
  );
}

export default App;
