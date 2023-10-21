import { useEffect } from "react";
import IProjectDetails from "../interfaces/IProjectDetails"
import close from "../assets/close.svg"
import { ReactSVG } from "react-svg";

interface IProps {
  project: IProjectDetails
  setShowProjectDetails: React.Dispatch<React.SetStateAction<boolean>>
}

function ProjectDetails({project, setShowProjectDetails}: IProps) {

  function closeProjectDetails():void {   
    setShowProjectDetails(false)
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProjectDetails()
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div
      className="flex flex-col items-center gap-4 p-8 pt-16 overflow-y-scroll fixed z-20 left-0 top-0 bottom-0 bg-blackTransparency w-screen min-h-screen sm:gap-8 md:pt-8 md:px-40"
    >
      <button
        onClick={closeProjectDetails}
        className="fixed right-5 top-4 flex items-center justify-center border rounded-md border-white bg-black"
      >
        <ReactSVG src={close} className="fill-white w-10 sm:w-16" />
      </button>
      <h1
        className="text-white text-3xl font-bold sm:text-5xl"
      >
        {project.title}
      </h1>
      <img src={project.img} alt={`${project.title}.`} className="h-36 border-red border-4 shadow-card sm:h-64" />
      <div
        className="text-white p-6 font-bold"
      >
        {project.description.map((paragraph, index) => <p key={`p-${index}`}>{paragraph}</p>)}
      </div>
      <div
        className="flex flex-col gap-8 sm:flex-row sm:gap-20"
      >
        <a 
          href={project.siteLink} 
          target="_blank" 
          className="project-btn"
        >
          Projeto
        </a>
                <a 
          href={project.repoLink} 
          target="_blank" 
          className="project-btn"
        >
          Repositório
        </a>
      </div>
    </div>
  )
}

export default ProjectDetails