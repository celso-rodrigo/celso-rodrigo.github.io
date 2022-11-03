import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import close from "../images/close.svg";

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
        <img src={close} alt="Botão para fechar." />
      </button>
      <div className="image">
        <img src={img} alt="Project thumbnail." />
      </div>
      <div className="description">
        <h2 className="project-title">{name}</h2>
        <p className="project-description">{description}</p>
      </div>
      <div className="link-containers">
        <a href={siteLink}>Projeto</a>
        <a href={repoLink}>Repositório</a>
      </div>
    </div>
  );
}

export default ProjectInfo;
