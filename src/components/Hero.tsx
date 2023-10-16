import heroImage from "../assets/heroImg.svg"

function Hero() {
  return (
    <div className="flex justify-center items-center w-screen bg-heroBg bg-no-repeat bg-cover pt-24 pb-4 sm:pt-20 sm:h-screen">
      <div
        className="flex flex-col h-1/2 gap-2"
      >
        <div>
          <p className="text-2xl sm:text-4xl">Olá, mundo.</p>
          <p className="text-2xl sm:text-4xl">Eu sou o</p>
        </div>
        <h1 className="font-bold text-4xl sm:text-6xl">Celso Rodrigo</h1>
        <p className="font-medium text-red text-lg sm:text-xl">Desenvolvedor Web Front-End</p>
      </div>
      <img
        className="hidden w-2/5 max-h-96 sm:block"
        src={heroImage}
        alt="Ilustração do hero."
      />
    </div>
  )
}

export default Hero