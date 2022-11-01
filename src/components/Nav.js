import React from "react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-options">
        <li className="nav-link">
          <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>Sobre</Link>
        </li>
        <li className="nav-link">
          <Link to="projects" spy={true} smooth={true} offset={-40} duration={500}>Projetos</Link>
        </li>
        <li className="nav-link">
          <Link to="contact" spy={true} smooth={true} offset={-40} duration={500}>Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
