import React, { useContext } from "react";
import Context from "../context/Context";

import PropTypes from "prop-types";

function ProjectCard({info}) {
  const { displayProject } = useContext(Context);

  const { img, name, id } = info;

  return (
    <div onClick={() => displayProject(info)} className="project-card"  title={name}  data-aos="fade-left" data-aos-duration={`${1000 + id * 200}`}>
      <img src={img} alt="Project thumbnail."/>
    </div>
  );
}

ProjectCard.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    repoLink: PropTypes.string,
    siteLink: PropTypes.string,
  })
};

export default ProjectCard;
