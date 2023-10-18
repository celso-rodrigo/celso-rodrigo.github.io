import contactImg from "../assets/contactImg.svg"
import Socials from "./Socials"

function Contact() {
  return (
    <section
      className="contactMe flex flex-col sm:pb-8 sm:gap-8"
    >
      <hr className="text-gray" />
      <div className="flex flex-col-reverse justify-center items-center gap-12 p-8 sm:items-start sm:flex-row">
        <img src={contactImg} alt="Ilustração da sessão contato" className="w-72 sm:w-96" />
        <div className="flex flex-col items-center gap-8 sm:w-1/3">
          <h1 className="section-title">Contato</h1>
          <p className="text-center">Gostaria de conversar sobre algo ou me conhecer um pouco mais? Entre em contato!</p>
          <Socials />
        </div>
      </div>
    </section>
  )
}

export default Contact