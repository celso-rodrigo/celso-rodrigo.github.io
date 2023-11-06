import IProjectDetails from "../interfaces/IProjectDetails";

interface IProps {
  project: IProjectDetails
  handleDisplayProject: (project: IProjectDetails) => void
}

function ProjectCard({project, handleDisplayProject}: IProps) {
  return (
    <button
      onClick={() => handleDisplayProject(project)}
      className="h-48 transition duration-500 shadow-card hover:scale-110"
      data-aos="fade-right"
      data-aos-duration={project.id * 100 + 1000}
    >
      <img
        src={project.img}
        alt={`${project.title}.`}
        className="w-full h-full"
      />
    </button>
  )
}

export default ProjectCard