import ProjectCard from "./ProjectCard"
import SectionTitle from "./SectionTitle"
import projectsData from "../data/projectsData"

function Projects() {
  return (
    <section className="myProjects pb-16">
      <SectionTitle title="Projetos" />
      <div
        className="flex flex-wrap justify-center items-center gap-20"
      >
        {projectsData.map((project) => <ProjectCard projectImg={project.img} projectTitle={project.name} />)}
      </div>
    </section>
  )
}

export default Projects