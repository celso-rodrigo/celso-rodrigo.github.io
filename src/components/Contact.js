import React from "react";
import email from "../images/email.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import contactImg from "../images/contactImg.svg";

function Contact() {
  return (
    <section className="contact">
      <div className="img-container">
        <img src={contactImg} alt="Ilustração da sessão contato" />
      </div>
      <div className="content-container">
        <h1>Contato</h1>
        <p>Gostaria de conversar sobre algo ou me conhecer um pouco mais? Entre em contato!</p>
        <div className="contact-links">
          <a href='mailto:celsorodrigoma@gmail.com' title="celsorodrigoma@gmail.com">
            <img src={email} alt='Email' />
          </a>
          <a href='https://www.linkedin.com/in/celso-rodrigo-monteiro/' title="celso-rodrigo-monteiro"  target='_blank' rel="external noreferrer">
            <img src={linkedin} alt='LinkedIn' />
          </a>
          <a href='https://github.com/celso-rodrigo' title="celso-rodrigo" target='_blank' rel="external noreferrer">
            <img src={github} alt='GitHub' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
