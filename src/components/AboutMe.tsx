import aboutImg from "../assets/aboutImg.svg"
import SectionTitle from "./SectionTitle"

function AboutMe() {
  return (
    <section
      className="aboutMe flex flex-col items-center shadow-lgUp"
    >
      <SectionTitle title="Sobre mim" />
      <div className="flex justify-evenly items-center pb-16">
        <div className="flex flex-col gap-1 px-12 lg:w-2/5">
          <p>Olá, eu sou Celso Rodrigo, tenho 25 anos e sou um desenvolvedor web front-end apaixonado por games e tecnologia.</p>
          <p>Desde que era bem pequeno, amava passar o tempo na internet jogando, vendo vídeos e descobrindo coisas novas. Foi na internet que encontrei meus melhores amigos, meus passatempos favoritos e também muitas das minhas frustrações. As frustrações surgiam ao perceber como o mundo era vasto e que algumas coisas ainda pareciam impossíveis.</p>
          <p>Conforme fui crescendo, minha paixão pelo mundo da informática apenas cresceu. Vi cada vez mais barreiras sendo superadas. Coisas que pareciam sonhos na minha infância se tornaram realidade. Chegou a hora de transformar minhas paixões em meu futuro. Em 2022, iniciei minha profissionalização como desenvolvedor web front-end.</p>
          <p>Ver uma aplicação tomando forma, ficando cada vez mais bonita e funcional, compensa qualquer esforço e estresse. Hoje, me sinto confortável trabalhando principalmente com React, JavaScript, TypeScript, Git, Tailwind e Styled Components, mas estou sempre em busca de aprender coisas novas.</p>
        </div>
        <aside className="hidden lg:block w-2/5">
          <img src={aboutImg} alt="Ilustração da sessão sobre." />
        </aside>
      </div>
    </section>
  )
}

export default AboutMe