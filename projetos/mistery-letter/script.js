// VARAIBLES
const createBtn = document.getElementById('criar-carta');
const txtInput = document.getElementById('carta-texto');
const txtOutput = document.getElementById('carta-gerada');
const contTitle = document.querySelector('h2');
const wordCont = document.getElementById('carta-contador');
const styleClassGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeClassGroup = ['medium', 'big', 'reallybig'];
const rotateClassGroup = ['rotateleft', 'rotateright'];
const initClassGroup = ['skewleft', 'skewright'];

// FUNCTIONS
function updateCont() {
  contTitle.style.display = 'block';
  wordCont.style.display = 'block';
  wordCont.innerText = txtOutput.childElementCount;
}

function spanRandomizer() {
  const randomStyle = styleClassGroup[Math.floor(Math.random() * styleClassGroup.length)];
  const randomSize = sizeClassGroup[Math.floor(Math.random() * sizeClassGroup.length)];
  const randomRotate = rotateClassGroup[Math.floor(Math.random() * rotateClassGroup.length)];
  const randominit = initClassGroup[Math.floor(Math.random() * initClassGroup.length)];
  return `${randomStyle} ${randomSize} ${randomRotate} ${randominit}`;
}

function chageRandomStyle(origin) {
  const clickedSpan = origin.target;
  clickedSpan.classList = spanRandomizer();
}

function createText() {
  const txtArray = txtInput.value.split(' ');
  for (let cont1 = 0; cont1 < txtArray.length; cont1 += 1) {
    const spanMaker = document.createElement('span');
    spanMaker.innerText = txtArray[cont1];
    spanMaker.classList = spanRandomizer();
    spanMaker.addEventListener('click', chageRandomStyle);
    txtOutput.appendChild(spanMaker);
  }
  updateCont();
}

function clearTxt() {
  const allSpans = document.querySelectorAll('span');
  for (let cont2 = 0; cont2 < allSpans.length; cont2 += 1) {
    txtOutput.removeChild(allSpans[cont2]);
  }
}

function checkTxt() {
  txtOutput.innerText = '';
  // Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  if (txtInput.value.trim() === '') {
    txtOutput.innerText = 'Por favor, digite o conteúdo da carta.';
    contTitle.style.display = 'none';
    wordCont.style.display = 'none';
  } else {
    createText();
  }
}

function manageTxt() {
  txtOutput.style.display = 'block';
  clearTxt();
  checkTxt();
}

// EVEVENT LISTENERS
createBtn.addEventListener('click', manageTxt);

// STATIC
