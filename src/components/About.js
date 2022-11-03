import React from "react";
import aboutImg from "../images/aboutImg.svg";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>Sobre Mim</h1>
        <p>Olá. Eu sou um desenvolvedor web front-end apaixonado por games e tecnologia.</p>
        <p>Desde que era bem pequeno, amava passar o tempo na internet jogando, vendo vídeos e descobrindo coisas novas. Foi nela que encontrei meus melhores amigos, passatempos favoritos e também muitas das minhas frustrações. </p>
        <p>As frustrações vinham de ver como o mundo era grande, de como com tanta tecnologia, algumas coisas ainda eram impossíveis.</p>
        <br />
        <p>Eu cresci e só me apaixonei mais e mais por tudo que a tecnologia me proporciona. Coisas que pareciam sonhos na minha infância, já eram realidade. Chegou então a hora de transformar minhas paixões em meu futuro, em 2022 comecei o curso de desenvolvedor web na <a href="https://www.betrybe.com" target="_black" rel="external">Trybe</a>.</p>
        <p>Adoro saber que hoje sou um dos responsáveis por conectar pessoas com coisas que elas adoram, que vou colaborar para o progresso dessa coisa incrível que me acompanha desde pequeno.</p>
        <br />
        <p>Encontrei minha paixão no front-end. Ver uma aplicação tomando forma, ficando cada vez mais bonita, compensa todo o esforço e estresse que eu venha a passar.</p>
        <p>Hoje, me sinto confortável em trabalhar principalmente com React e Javascript, mas quero estar sempre buscando aprender coisas novas.</p>
      </div>
      <div className="about-img">
        <img src={aboutImg} alt="Ilustração da sessão sobre."/>
      </div>
    </section>
  );
}

export default About;
