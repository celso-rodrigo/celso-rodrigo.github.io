import AboutMe from "./components/AboutMe"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import MyStacks from "./components/MyStacks"

function App() {
  return (
    <div className="font-ubuntu">
      <NavBar />
      <Hero />
      <AboutMe />
      <MyStacks />
    </div>
  )
}

export default App
