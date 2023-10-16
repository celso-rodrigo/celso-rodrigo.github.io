import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="sticky p-6 px-16 top-0 left-0 right-0 bg-blue">
      <ul className="flex gap-6 justify-center md:gap-12 sm:justify-end">
        <Link
          to="hero"
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Início
        </Link>
        <Link
          to="aboutMe"
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Sobre
        </Link>
        <Link
          to="myStacks"
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Stacks
        </Link>
        <Link
          to="myProjects"
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Projetos
        </Link>
        <Link
          to="contactMe"
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Contato
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar