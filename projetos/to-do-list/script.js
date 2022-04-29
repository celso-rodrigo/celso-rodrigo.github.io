// VARIABLES
const saveTaskBtn = document.getElementById('criar-tarefa');
const clearList = document.getElementById('apaga-tudo');
const clearSelected = document.getElementById('remover-selecionado');
const clearCompleteds = document.getElementById('remover-finalizados');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const saveData = document.getElementById('salvar-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

// FUNCTIONS
// Torna DIV invisivel quando vazia.
function taskListDisplay() {
  if (taskList.childElementCount > 0) {
    taskList.style.display = 'block';
  } else {
    taskList.style.display = 'none';
  }
}

// Apaga todas as tasks
function clearTasks() {
  do {
    taskList.firstChild.remove();
  } while (taskList.childElementCount > 0);
  taskListDisplay();
}

// Apaga todas as task completas
function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let cont2 = 0; cont2 < completedTasks.length; cont2 += 1) {
    completedTasks[cont2].remove();
  }
  taskListDisplay();
}

// Remove marcações antigas
function clearOldMarks() {
  for (let cont1 = 0; cont1 < taskList.childElementCount; cont1 += 1) {
    taskList.children[cont1].style.backgroundColor = '';
    taskList.children[cont1].id = '';
  }
}

// Adiciona e remove a classe completed das tasks
function manageCompleteds(origin) {
  const listElement = origin.target;
  if (listElement.classList.value === '' && listElement.style.backgroundColor === 'grey') {
    listElement.classList = 'completed';
  } else {
    listElement.classList = '';
  }
}

// Muda a cor de funda da task selecionada
function liMarked(origin) {
  const clickedLi = origin.target;
  clearOldMarks();
  clickedLi.style.backgroundColor = 'grey';
  clickedLi.id = 'selected';
}

// Adiciona event listeners a taks criadas dinâmicamente
function addTasksEventListeners(origin) {
  const taskToAdcEvent = origin;
  taskToAdcEvent.addEventListener('click', liMarked);
  taskToAdcEvent.addEventListener('dblclick', manageCompleteds);
}

// Trata erros caso usuário tente adicionar uma task vazia
function checkEmpty() {
  if (taskInput.value === '') {
    alert('Por favor, insira uma tarefa');
  } else {
    return true;
  }
}

// Faz conteúdo da caixa de texto se tornar uma nova task ao botão ser precionado
function adcTask() {
  if (checkEmpty() === true) {
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    addTasksEventListeners(newTask);
    taskList.appendChild(newTask);
    taskInput.value = '';
    taskListDisplay();
  }
}

// Trata erros caso usuário tente executar ações relacionadas a task sem uma task selecionada
function checkSelected() {
  if (document.getElementById('selected') === null) {
    alert('Por favor, selecione uma tarefa.');
  } else {
    return true;
  }
}

// Checa se a posição para movimentação das tasks é válida
function checkIndex(index, direction) {
  if (index === 0 && direction === 'up') {
    alert('A tarefa já está no topo da lista.');
  } else if (index + 1 === taskList.childElementCount && direction === 'down') {
    alert('A tarefa já está no base da lista.');
  } else {
    return true;
  }
}

// Deleta task selecionada
function clearSelectedTasks() {
  if (checkSelected() === true) {
    const selectedTask = document.getElementById('selected');
    selectedTask.remove();
    taskListDisplay();
  }
}

// Salva index da task selecionada, usado para movimentação das tasks
function getSelectedIndex() {
  let indexOfSelected = null;
  for (let cont5 = 0; cont5 < taskList.childElementCount; cont5 += 1) {
    if (taskList.children[cont5].id === 'selected') {
      indexOfSelected = cont5;
    }
  }
  return indexOfSelected;
}

// Cria e customiza task igual a taks removida para dar sensação de movimento, usado para movimentação das tasks
function taskToMoveCustomizer() {
  const taskToMove = document.getElementById('selected');
  const moveTask = document.createElement('li');
  moveTask.innerText = taskToMove.innerText;
  moveTask.id = 'selected';
  moveTask.style.background = 'grey';
  if (taskToMove.classList.value === 'completed') {
    moveTask.classList = 'completed';
  }
  return moveTask;
}

// Remove task e cria uma igual acima da posição da task removida
function moveTaskUp() {
  if (checkSelected() === true && checkIndex(getSelectedIndex(), 'up') === true) {
    const upIndex = getSelectedIndex() - 1;
    const taskToMoveUp = document.getElementById('selected');
    const newMovedTask = taskToMoveCustomizer();
    taskToMoveUp.remove();
    taskList.insertBefore(newMovedTask, taskList.children[upIndex]);
    addTasksEventListeners(newMovedTask);
  }
}

// Remove task e cria uma igual abaixo da posição da task removida
function moveTaskDown() {
  if (checkSelected() === true && checkIndex(getSelectedIndex(), 'down') === true) {
    const downIndex = getSelectedIndex() + 1;
    const taskToMoveDown = document.getElementById('selected');
    const newMovedTask = taskToMoveCustomizer();
    taskToMoveDown.remove();
    taskList.insertBefore(newMovedTask, taskList.children[downIndex]);
    addTasksEventListeners(newMovedTask);
  }
}

// Salva tasks no local storage
function saveTasks() {
  const allTasks = taskList.children;
  for (let cont3 = 0; cont3 < allTasks.length; cont3 += 1) {
    const currentTask = allTasks[cont3];
    const taskToSave = { text: `${currentTask.innerText}`, class: `${currentTask.classList}` };
    localStorage.setItem(`${cont3}`, `${JSON.stringify(taskToSave)}`);
  }
}

// EVENT LISTENERS
saveTaskBtn.addEventListener('click', adcTask);
clearList.addEventListener('click', clearTasks);
clearCompleteds.addEventListener('click', clearCompletedTasks);
clearSelected.addEventListener('click', clearSelectedTasks);
btnMoveUp.addEventListener('click', moveTaskUp);
btnMoveDown.addEventListener('click', moveTaskDown);
saveData.addEventListener('click', saveTasks);

// STATIC
// Carrega local storage
if (localStorage.length >= 1) {
  for (let cont4 = 0; cont4 < localStorage.length; cont4 += 1) {
    const loadedTask = JSON.parse(localStorage.getItem(cont4));
    const taskLoader = document.createElement('li');
    taskLoader.innerText = loadedTask.text;
    taskLoader.classList = loadedTask.class;
    addTasksEventListeners(taskLoader);
    taskList.appendChild(taskLoader);
  }
  taskListDisplay();
}
