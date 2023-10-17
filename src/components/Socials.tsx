import email from "../assets/email.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import { ReactSVG } from "react-svg"

function Socials() {
  return (
    <div className="flex items-center gap-6">
      <a href="mailto:celsorodrigoma@gmail.com" target="_blank" className="social-icon-container">
        <ReactSVG src={email} className="fill-black transition hover:scale-110 w-9 sm:w-14" />
      </a>
      <a href="https://www.linkedin.com/in/celso-rodrigo-monteiro/" target="_blank" className="socialIconContainer">
        <ReactSVG src={linkedin} className="fill-black transition hover:scale-110 w-8 sm:w-12" />
      </a>
      <a href="https://github.com/celso-rodrigo" target="_blank" className="socialIconContainer">
        <ReactSVG src={github} className="fill-black transition hover:scale-110 w-8 sm:w-12" />
      </a>
    </div>
  )
}

export default Socials