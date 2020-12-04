const todoform = document.querySelector(".js-todoform");
const todoinput = todoform.querySelector("input");
const todolist = document.querySelector(".js-todolist");

function painttodo(text) {
  console.log(text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoinput.value;
  painttodo(currentValue);
}

function loadTodos() {
  const todos = localStorage.getItem("todos");
  if (todos === null) {
  }
}

function init() {
  loadTodos();
  todoform.addEventListener("submit", handleSubmit);
}
init();
