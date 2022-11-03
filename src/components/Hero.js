import React from "react";
import placeHolder3 from "../images/test1.svg";

function Hero() {
  return (
    <div className="hero">
      <img src={placeHolder3} alt="WIP" className="hero-img"/>
      <div className="hero-text">
        <div>
          <h2>Olá, mundo.</h2>
          <h2>Eu sou o</h2>
        </div>
        <div>
          <h1>Celso Rodrigo!</h1>
          <h3>Desenvolvedor Web Front-End</h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
