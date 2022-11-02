import React from "react";
import email from "../images/email.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import placeHolder2 from "../images/placeHolder2.png";

function Contact() {
  return (
    <section className="contact">
      <div className="content-container">
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
      <div className="img-container">
        <img src={placeHolder2} alt="WIP" />
      </div>
    </section>
  );
}

export default Contact;
