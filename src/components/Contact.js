import React from "react";
import placeHolder from "../images/placeHolder.png";
import email from "../images/email.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

function Contact() {
  return (
    <div className="container">
      <div className="container-content">
        <h1>Contato</h1>
        <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  </p>
        <div className="contact-links">
          <a href='#' target='_blank' rel='external'>
            <img src={email} alt='Email' />
          </a>
          <a href='#' target='_blank' rel='external'>
            <img src={linkedin} alt='LinkedIn' />
          </a>
          <a href='#' target='_blank' rel='external'>
            <img src={github} alt='GitHub' />
          </a>
        </div>
      </div>
      <div className="container-img">
        <img src={placeHolder} alt="wip"/>
      </div>
    </div>
  );
}

export default Contact;
