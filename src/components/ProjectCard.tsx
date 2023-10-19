interface IProps {
  projectImg: string;
  projectTitle: string;
}

function ProjectCard({projectImg, projectTitle}: IProps) {
  return (
    <button
      onClick={() => console.log("WIP")}
      className="h-44 transition duration-500 shadow-card hover:scale-110"
    >
      <img
        src={projectImg}
        alt={`${projectTitle}.`}
        className="w-full h-full"
      />
    </button>
  )
}

export default ProjectCard