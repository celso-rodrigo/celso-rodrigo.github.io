// VARS
const clearBtn = document.getElementById('clear-board');
const colorList = document.querySelectorAll('.color');
const pixelList = document.querySelectorAll('.pixel');
let selectedColor = colorList[0].style.backgroundColor;

// FUNCTIONS
// Retorna cor aleatória. Formato: 'rgb(x, x, x)'
function randomColor() {
  const randomColorValue = [];
  for (let cont1 = 0; cont1 < 3; cont1 += 1) {
    randomColorValue.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${randomColorValue[0]}, ${randomColorValue[1]}, ${randomColorValue[2]})`;
}

// Torna lista de cores aleatória, com exceção da primeira
function randomizeColor() {
  for (let cont2 = 1; cont2 < colorList.length; cont2 += 1) {
    colorList[cont2].style.backgroundColor = randomColor();
  }
}

// Remove classe selected
function clearSelectedColor() {
  for (let cont3 = 0; cont3 < colorList.length; cont3 += 1) {
    colorList[cont3].classList = 'color';
  }
}

// Adiciona classe selected e atualiza cor selecionada
function selectColor(origin2) {
  const originTarget = origin2.target;
  clearSelectedColor();
  originTarget.classList = 'color selected';
  selectedColor = originTarget.style.backgroundColor;
}

// Pinta div do quadro selecionada com a cor selecionada
function SelectPixel(origin3) {
  const originTarget2 = origin3.target;
  originTarget2.style.backgroundColor = selectedColor;
}

// Torna a cor de todas as div do quadro branca
function clearBoard() {
  for (let cont4 = 0; cont4 < pixelList.length; cont4 += 1) {
    pixelList[cont4].style.backgroundColor = 'white';
  }
}

// EVENT LISTENERS
clearBtn.addEventListener('click', clearBoard);
for (let cont5 = 0; cont5 < colorList.length; cont5 += 1) {
  colorList[cont5].addEventListener('click', selectColor);
}
for (let cont6 = 0; cont6 < pixelList.length; cont6 += 1) {
  pixelList[cont6].addEventListener('click', SelectPixel);
}

// STATIC
document.getElementById('titleEffect').style.backgroundColor = randomColor();
randomizeColor();
colorList[0].style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
