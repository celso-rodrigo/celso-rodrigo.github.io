import ProjectCard from "./ProjectCard"
import SectionTitle from "./SectionTitle"
import projectsData from "../data/projectsData"
import { useState } from "react"
import IProjectDetails from "../interfaces/IProjectDetails"
import ProjectDetails from "./ProjectDetails"

function Projects() {
  const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false)
  const [displayedDetails, setDisplayedDetails] = useState<IProjectDetails>(projectsData[0])

  function handleDisplayProject(project: IProjectDetails) {
    if (!showProjectDetails) setDisplayedDetails(project)
    setShowProjectDetails((prev) => !prev)
  }

  return (
    <>
      <section className="myProjects pb-16">
        <SectionTitle title="Projetos" />
        <div
          className="flex flex-wrap justify-center items-center gap-20"
        >
          {projectsData.map((project) => 
            <ProjectCard key={project.id} project={project} handleDisplayProject={handleDisplayProject} />
          )}
        </div>
      </section>
      { showProjectDetails && (
        <ProjectDetails project={displayedDetails} setShowProjectDetails={setShowProjectDetails} />
      )}
    </>
  )
}

export default Projects