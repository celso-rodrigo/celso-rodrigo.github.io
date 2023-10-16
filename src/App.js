import React, { useContext } from "react";
import Context from "./context/Context";
import ProjectInfo from "./components/ProjectInfo";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/";

function App() {
  const { display, projectToDisplay } = useContext(Context);

  return (
    <div className="main">
      {display && <ProjectInfo img={projectToDisplay} />}
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
