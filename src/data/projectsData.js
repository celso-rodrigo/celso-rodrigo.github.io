import { tryCookingDesc, whatToDoDesc } from "./descriptions";
import tryCooking from "../images/tryCooking.png";
import whatToDo from "../images/whatToDo.png";


const projectsData = [
  {
    id: 1,
    name: "TryCooking",
    description: tryCookingDesc,
    img: tryCooking,
    repoLink: "https://github.com/celso-rodrigo/TryCooking",
    siteLink: "",
  },
  {
    id: 2,
    name: "WhatToDo",
    description: whatToDoDesc,
    img: whatToDo,
    repoLink: "https://github.com/celso-rodrigo/whatToDo",
    siteLink: "https://celso-rodrigo.github.io/whatToDo/",
  },
];

export default projectsData;