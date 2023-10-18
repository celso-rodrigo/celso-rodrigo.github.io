import AboutMe from "./components/AboutMe"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import MyStacks from "./components/MyStacks"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="font-ubuntu">
      <NavBar />
      <Hero />
      <AboutMe />
      <MyStacks />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
