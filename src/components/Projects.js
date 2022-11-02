import React from "react";
import ProjectCard from "./ProjectCard";
import placeHolder from "../images/placeHolder.png";

function Projects() {
  return (
    <section className="projects">
      <h1>Projetos</h1>
      <div className="projects-container">
        <ProjectCard img={placeHolder} />
        <ProjectCard img={placeHolder} />
        <ProjectCard img={placeHolder} />
        <ProjectCard img={placeHolder} />
        <ProjectCard img={placeHolder} />
        <ProjectCard img={placeHolder} />
        <ProjectCard img={placeHolder} />
      </div>
    </section>
  );
}

export default Projects;
