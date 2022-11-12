import { tryCookingDesc, whatToDoDesc, signUpPageDesc } from "./descriptions";
import tryCooking from "../images/tryCooking.png";
import whatToDo from "../images/whatToDo.png";
import signUpPage from "../images/signUpPage.png";

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
    name: "Sign Up Page",
    description: signUpPageDesc,
    img: signUpPage,
    repoLink: "https://github.com/celso-rodrigo/sign-up-page",
    siteLink: "https://celso-rodrigo.github.io/sign-up-page",
  },
];

export default projectsData;