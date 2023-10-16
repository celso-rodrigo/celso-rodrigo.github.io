function NavBar() {
  return (
    <nav className="absolute p-6 px-16 top-0 left-0 right-0 bg-blue">
      <ul className="flex gap-6 justify-center md:gap-12 sm:justify-end">
        <a href="#" className="nav-link">Início</a>
        <a href="#" className="nav-link">Sobre</a>
        <a href="#" className="nav-link">Stacks</a>
        <a href="#" className="nav-link">Projetos</a>
        <a href="#" className="nav-link">Contato</a>
      </ul>
    </nav>
  )
}

export default NavBar