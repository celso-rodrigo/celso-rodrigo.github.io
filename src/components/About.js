import React from "react";
import aboutImg from "../images/aboutImg.svg";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>Sobre Mim</h1>
        <div className="about-paragraph">
          <p>Olá. Eu sou o Celso Rodrigo, tenho 24 anos e sou um desenvolvedor web front-end apaixonado por games e tecnologia.</p>
        </div>
        <div className="about-paragraph">
          <p>Desde que era bem pequeno, amava passar o tempo na internet jogando, vendo vídeos e descobrindo coisas novas. Foi nela que encontrei meus melhores amigos, passatempos favoritos e também muitas das minhas frustrações. As frustrações vinham de ver como o mundo era grande e que algumas coisas ainda eram impossíveis. </p>
        </div>
        <div className="about-paragraph">
          <p>Eu cresci e só me apaixonei mais e mais pelo mundo da informática. Vi cada vez mais barreiras sendo rompidas. Coisas que pareciam sonhos na minha infância, já eram realidade. Chegou então a hora de transformar minhas paixões em meu futuro, em 2022 comecei o curso de desenvolvedor web na <a href="https://www.betrybe.com" target="_black" rel="external">Trybe</a>.</p>
        </div>
        <div className="about-paragraph">
          <p>Encontrei meu lugar no front-end. Ver uma aplicação tomando forma, ficando cada vez mais bonita e funcional, compensa qualquer esforço e estresse. Hoje, me sinto confortável em trabalhar principalmente com React e Javascript, mas quero estar sempre buscando aprender coisas novas.</p>
        </div>
      </div>
      <div className="about-img">
        <img src={aboutImg} alt="Ilustração da sessão sobre."/>
      </div>
    </section>
  );
}

export default About;
