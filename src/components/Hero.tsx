import heroImage from "../assets/heroImg.svg"
import Socials from "./Socials"

function Hero() {
  return (
    <div className="hero flex justify-center items-center bg-heroBg bg-no-repeat bg-cover pb-8 xl:gap-20 lg:gap-12 md:p-0 md:min-h-[calc(100vh-80px)] md:pl-12">
      <div
        className="flex flex-col h-1/2 pt-8 gap-2 xl:pt-0 lg:gap-8"
      >
        <div>
          <p className="text-2xl xl:text-6xl sm:text-4xl">Olá, mundo.</p>
          <p className="text-2xl xl:text-6xl sm:text-4xl">Eu sou o</p>
        </div>
        <div>
          <h1 className="font-bold text-4xl xl:text-7xl sm:text-6xl text-black">Celso Rodrigo</h1>
          <p className="font-medium text-blue text-lg xl:text-2xl sm:text-xl">Desenvolvedor Web Front-End</p>
        </div>
        <Socials />
      </div>
      <img
        className="hidden h-1/4 w-1/2 md:block"
        src={heroImage}
        alt="Ilustração do hero."
      />
    </div>
  )
}

export default Hero