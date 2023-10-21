import whatToDo from "../assets/whatToDo.png"
import newShoppingCart from "../assets/newShoppingCart.png"
import emailGenerator from "../assets/emailGenerator.png"
import html5Quiz from "../assets/html5Quiz.png"
import hangman from "../assets/hangman.png"

const projectsData = [
  {
    id: 1,
    title: "HTML5 Quiz",
    description: ['HTML5 Quiz é uma aplicação de quiz feita com React, TypeScript e Styled Components, na qual o usuário deve tentar escolher a resposta correta para diversas questões sobre HTML5.'],
    img: html5Quiz,
    repoLink: "https://github.com/celso-rodrigo/html5-quiz",
    siteLink: "https://celso-rodrigo.github.io/html5-quiz/",
  },
  {
    id: 2,
    title: "Hangman",
    description: ['O Hangman é uma aplicação feita com React, TypeScript e Styled Components de um jogo da forca, no qual o usuário deve tentar descobrir a palavra secreta, podendo cometer um número limitado de erros.'],
    img: hangman,
    repoLink: "https://github.com/celso-rodrigo/hangman",
    siteLink: "https://celso-rodrigo.github.io/hangman/",
  },
  {
    id: 3,
    title: "New Shopping Cart",
    description: [
      'Este projeto é um redesenho do projeto Shopping Cart. Agora, com React, este projeto possui mais funcionalidades do que o antigo, que foi desenvolvido apenas com JavaScript, HTML e CSS.',
      'O New Shopping Cart é uma aplicação de e-commerce desenvolvida com o auxílio da API do Mercado Livre. Nele, você pode buscar produtos, adicioná-los ou removê-los do seu carrinho e finalizar a compra escolhendo o método de pagamento desejado.'
    ],
    img: newShoppingCart,
    repoLink: "https://github.com/celso-rodrigo/new-shopping-cart",
    siteLink: "https://celso-rodrigo.github.io/new-shopping-cart",
  },
  {
    id: 4,
    title: "WhatToDo",
    description: ['"WhatToDo" é uma aplicação de lista de tarefas desenvolvida com React e Context API. Nela, é possível realizar o CRUD (Create, Read, Update and Delete) das suas tarefas. Além disso, você pode alterar o tema da aplicação, e suas tarefas persistem mesmo após a atualização da página.'],
    img: whatToDo,
    repoLink: "https://github.com/celso-rodrigo/whatToDo",
    siteLink: "https://celso-rodrigo.github.io/whatToDo/",
  },
  {
    id: 5,
    title: "Email Generator",
    description: [
      'Um tempo atrás, um amigo estava me dizendo que não conseguia encontrar uma aplicação que gerasse múltiplos e-mails aleatórios únicos de uma só vez. Então, fiz uma para ele bem simples usando apenas JavaScript. Agora, decidi torná-la maior e mais fácil de usar.',
      'Nessa aplicação, você pode gerar até 40.000 e-mails únicos e formatados da maneira que preferir com apenas alguns cliques.'
    ],
    img: emailGenerator,
    repoLink: "https://github.com/celso-rodrigo/email-generator",
    siteLink: "https://celso-rodrigo.github.io/email-generator",
  },
];

export default projectsData;