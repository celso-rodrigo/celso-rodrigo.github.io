// VARIABLES
const colorOptions = document.querySelectorAll('.ball');
const titleColors = document.querySelectorAll('.titleEffect');
const askedColor = document.getElementById('rgb-color');
const showResult = document.getElementById('answer');
const restartBtn = document.getElementById('reset-game');
const gameScoreOutput = document.getElementById('score');
let gameScore = 0;
let roundEnd = false;
let correctAnswer = 'none';

// FUNCTIONS
function increaseScore() {
  if (roundEnd === false) {
    gameScore += 3;
    gameScoreOutput.innerText = gameScore;
    roundEnd = true;
  }
}

function generateColor() {
  const color1 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  return `rgb(${color1}, ${color2}, ${color3})`;
}

function randomizeAnswer() {
  const currentAnswer = Math.floor(Math.random() * colorOptions.length);
  colorOptions[currentAnswer].setAttribute('id', 'correctOption');
  askedColor.innerText = colorOptions[currentAnswer].style.backgroundColor;
  correctAnswer = askedColor.innerText;
}

function randomizeColor() {
  for (let cont3 = 0; cont3 < colorOptions.length; cont3 += 1) {
    colorOptions[cont3].style.backgroundColor = generateColor();
  }
  randomizeAnswer();
}

function randomizeTitle() {
  for (let cont2 = 0; cont2 < titleColors.length; cont2 += 1) {
    titleColors[cont2].style.color = generateColor();
  }
}

function pickColor(origin) {
  const choosedAnswer = origin.target.style.backgroundColor;
  if (choosedAnswer === correctAnswer) {
    showResult.innerText = 'Acertou!';
    showResult.style.color = 'green';
    increaseScore();
  } else {
    showResult.innerText = 'Errou! Tente novamente!';
    showResult.style.color = 'red';
  }
}

function clearOldGame() {
  for (let cont4 = 0; cont4 < colorOptions.length; cont4 += 1) {
    colorOptions[cont4].removeAttribute('id');
  }
  showResult.innerText = 'Escolha uma cor';
  showResult.style.color = 'black';
  roundEnd = false;
}

function restartGame() {
  clearOldGame();
  randomizeColor();
}

// EVENT LISTENERS

for (let cont1 = 0; cont1 < colorOptions.length; cont1 += 1) {
  colorOptions[cont1].addEventListener('click', pickColor);
}
restartBtn.addEventListener('click', restartGame);

// STATIC
randomizeTitle();
randomizeColor();
