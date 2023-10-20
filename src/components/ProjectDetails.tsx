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
      className="fixed z-20 left-0 top-0 bg-blackTransparency w-screen min-h-screen"
    >
      <button
        onClick={closeProjectDetails}
        className="fixed right-4 top-4 flex items-center justify-center border rounded-md border-white"
      >
        <ReactSVG src={close} className="fill-white w-10 sm:w-16" />
      </button>
    </div>
  )
}

export default ProjectDetails