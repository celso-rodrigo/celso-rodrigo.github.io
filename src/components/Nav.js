import React from "react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-options">
        <li className="nav-link">
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500} tabIndex="1">Início</Link>
        </li>
        <li className="nav-link">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} tabIndex="2">Sobre</Link>
        </li>
        <li className="nav-link">
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} tabIndex="3">Projetos</Link>
        </li>
        <li className="nav-link">
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} tabIndex="4">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;