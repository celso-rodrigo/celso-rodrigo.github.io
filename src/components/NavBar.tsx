import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="sticky h-20 p-6 top-0 left-0 right-0 py-6 bg-blue shadow-md sm:pr-10">
      <ul className="flex justify-around sm:gap-10 sm:justify-end">
        <Link
          to="hero"
          offset={-79}
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Início
        </Link>
        <Link
          to="aboutMe"
          offset={-79}
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Sobre
        </Link>
        <Link
          to="myStacks"
          offset={-79}
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Stacks
        </Link>
        <Link
          to="myProjects"
          offset={-79}
          spy
          smooth
          duration={500}
          className="nav-link"
        >
          Projetos
        </Link>
        <Link
          to="contactMe"
          offset={-79}
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