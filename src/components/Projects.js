import React from "react";
import placeHolder from "../images/placeHolder.png";

function Projects() {
  return (
    <section className="projects">
      <h1>Projetos</h1>
      <div className="projects-container">
        <div className="project">
          <img src={placeHolder} alt="wip"/>
        </div>
        <div className="project">
          <img src={placeHolder} alt="wip"/>
        </div>
        <div className="project">
          <img src={placeHolder} alt="wip"/>
        </div>
        <div className="project">
          <img src={placeHolder} alt="wip"/>
        </div>
        <div className="project">
          <img src={placeHolder} alt="wip"/>
        </div>
        <div className="project">
          <img src={placeHolder} alt="wip"/>
        </div>
      </div>
    </section>
  );
}

export default Projects;
