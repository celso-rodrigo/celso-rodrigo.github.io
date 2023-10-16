import { tryCookingDesc, whatToDoDesc, newShoppingCartDesc, emailGeneratorDesc } from "./descriptions";
import tryCooking from "../images/tryCooking.png";
import whatToDo from "../images/whatToDo.png";
import newShoppingCart from "../images/newShoppingCart.png";
import emailGenerator from "../images/emailGenerator.png";

const projectsData = [
  {
    id: 1,
    name: "WhatToDo",
    description: whatToDoDesc,
    img: whatToDo,
    repoLink: "https://github.com/celso-rodrigo/whatToDo",
    siteLink: "https://celso-rodrigo.github.io/whatToDo/",
  },
  {
    id: 2,
    name: "TryCooking",
    description: tryCookingDesc,
    img: tryCooking,
    repoLink: "https://github.com/celso-rodrigo/TryCooking",
    siteLink: "",
  },
  {
    id: 3,
    name: "New Shopping Cart",
    description: newShoppingCartDesc,
    img: newShoppingCart,
    repoLink: "https://github.com/celso-rodrigo/new-shopping-cart",
    siteLink: "https://celso-rodrigo.github.io/new-shopping-cart",
  },
  {
    id: 4,
    name: "Email Generator",
    description: emailGeneratorDesc,
    img: emailGenerator,
    repoLink: "https://github.com/celso-rodrigo/email-generator",
    siteLink: "https://celso-rodrigo.github.io/email-generator",
  },
];

export default projectsData;