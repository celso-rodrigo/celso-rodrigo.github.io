import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

function Projects() {
  return (
    <section className="projects">
      <div className="projects-title">
        <hr />
        <h1>Projetos</h1>
        <hr />
      </div>
      <div className="projects-container">
        {projectsData.map((project) => <ProjectCard info={project} key={project.id} />)}
      </div>
    </section>
  );
}

export default Projects;
