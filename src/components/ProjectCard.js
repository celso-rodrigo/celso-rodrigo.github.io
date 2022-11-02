import React, { useContext } from "react";
import Context from "../context/Context";

import PropTypes from "prop-types";

function ProjectCard({img}) {
  const { displayProject } = useContext(Context);

  return (
    <div onClick={() => displayProject(img)} className="project-card">
      <img src={img} alt="Project thumbnail."/>
    </div>
  );
}

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
};

export default ProjectCard;
