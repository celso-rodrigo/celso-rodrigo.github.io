import React from "react";
import placeHolder3 from "../images/placeHolder3.png";
import placeHolder4 from "../images/placeHolder4.png";

function Hero() {
  return (
    <div className="hero">
      <img src={placeHolder3} alt="WIP" className="hero-img-one"/>
      <img src={placeHolder4} alt="WIP" className="hero-img-two"/>
    </div>
  );
}

export default Hero;
