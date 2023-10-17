import heroImage from "../assets/heroImg.svg"
import Socials from "./Socials"

function Hero() {
  return (
    <div className="hero flex justify-center bg-heroBg bg-no-repeat bg-cover pb-8 md:h-screen md:pt-28 md:pl-12">
      <div
        className="flex flex-col h-1/2 gap-4 pt-8"
      >
        <div>
          <p className="text-2xl sm:text-4xl">Olá, mundo.</p>
          <p className="text-2xl sm:text-4xl">Eu sou o</p>
        </div>
        <div>
          <h1 className="font-bold text-4xl sm:text-6xl text-black">Celso Rodrigo</h1>
          <p className="font-medium text-blue text-lg sm:text-xl">Desenvolvedor Web Front-End</p>
        </div>
      </div>
      <img
        className="hidden w-2/5 max-h-96 md:block"
        src={heroImage}
        alt="Ilustração do hero."
      />
    </div>
  )
}

export default Hero