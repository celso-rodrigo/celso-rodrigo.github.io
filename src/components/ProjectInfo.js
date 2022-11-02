import React from "react";
import placeHolder from "../images/placeHolder.png";

function ProjectInfo() {
  return (
    <div className="project-info">
      <div className="close-btn">
        <img src={placeHolder} alt="WIP" />
      </div>
      <div className="image">
        <img src={placeHolder} alt="WIP" />
      </div>
      <div className="description">
        <h2>Porject Name</h2>
        <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      </div>
      <div className="link-containers">
        <a href="#">Projeto</a>
        <a href="#">Repositório</a>
      </div>
    </div>
  );
}

export default ProjectInfo;
