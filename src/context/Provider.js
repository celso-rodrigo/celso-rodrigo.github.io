import React, { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [display, setDisplay] = useState(false);
  const [projectToDisplay, setProjectToDisplay] = useState("");

  const displayProject = (img) => {
    if (img) setProjectToDisplay(img);
    setDisplay((prevState) => (!prevState));
  };

  const providerValue = {
    display,
    projectToDisplay,
    displayProject,
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;