import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Nav />
        <div className="section hero" />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
