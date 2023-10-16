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
      <div className="project-text">
        <h2 className="project-title">{name}</h2>
        <div className="project-description">
          {description}
        </div>
      </div>
      <div className="link-containers">
        {siteLink.length !== 0 && <a href={siteLink} target="_blank" rel="noreferrer external">Projeto</a>}
        <a href={repoLink} target="_blank" rel="noreferrer external">Repositório</a>
      </div>
    </div>
  );
}

export default ProjectInfo;
