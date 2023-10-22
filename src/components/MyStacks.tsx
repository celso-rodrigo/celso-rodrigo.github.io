import javascript from "../assets/javascript.svg"
import typescript from "../assets/typescript.svg"
import react from "../assets/react.svg"
import git from "../assets/git.svg"
import html5 from "../assets/html5.svg"
import css3 from "../assets/css3.svg"
import Stack from "./Stack"

function MyStacks() {
  return (
    <section className="myStacks flex flex-col items-center gap-12 py-8 bg-black">
      <h1
        className="text-3xl font-light text-white font-tech-mono sm:text-4xl md:text-5xl"
      >
        Principais Stacks
      </h1>
      <div className="flex items-center justify-center px-8 gap-12 flex-wrap">
        <Stack logo={javascript} title="JavaScript" animationDuration={500} />
        <Stack logo={typescript} title="TypeScript" animationDuration={600} />
        <Stack logo={react} title="ReactJs" animationDuration={700} />
        <Stack logo={git} title="Git" animationDuration={800} />
        <Stack logo={html5} title="HTML5" animationDuration={900} />
        <Stack logo={css3} title="CSS3" animationDuration={1000} />
      </div>
    </section>
  )
}

export default MyStacks