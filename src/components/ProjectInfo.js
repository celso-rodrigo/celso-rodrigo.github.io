import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import placeHolder from "../images/placeHolder.png";

function ProjectInfo() {
  const { displayProject, projectToDisplay } = useContext(Context);

  const {name, description, img, repoLink, siteLink} = projectToDisplay;

  useEffect(() => {
    const handleKeyPress = ({key}) => {
      if (key === "Escape") displayProject();
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="project-info">
      <button className="close-btn" onClick={() => displayProject()}>
        <img src={placeHolder} alt="WIP" />
      </button>
      <div className="image">
        <img src={img} alt="Project thumbnail." />
      </div>
      <div className="description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="link-containers">
        <a href={siteLink}>Projeto</a>
        <a href={repoLink}>Repositório</a>
      </div>
    </div>
  );
}

export default ProjectInfo;
