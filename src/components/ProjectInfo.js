import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Context from "../context/Context";
import placeHolder from "../images/placeHolder.png";

function ProjectInfo({img}) {
  const { displayProject } = useContext(Context);

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

ProjectInfo.propTypes = {
  img: PropTypes.string.isRequired,
};

export default ProjectInfo;
