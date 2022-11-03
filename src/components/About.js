import React from "react";
import placeHolder from "../images/test2.svg";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>Sobre Mim</h1>
        <p>About about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about</p>
        <p>About about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about</p>
      </div>
      <div className="about-img">
        <img src={placeHolder} alt="wip"/>
      </div>
    </section>
  );
}

export default About;
