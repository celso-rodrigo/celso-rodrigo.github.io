import React from "react";
import aboutImg from "../images/aboutImg.svg";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>Sobre Mim</h1>
        <p>About about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about</p>
        <p>About about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about</p>
      </div>
      <div className="about-img">
        <img src={aboutImg} alt="Ilustração da sessão sobre."/>
      </div>
    </section>
  );
}

export default About;
