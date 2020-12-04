const todoform = document.querySelector(".js-todoform");
const todoinput = todoform.querySelector("input");
const todolist = document.querySelector(".js-todolist");

function painttodo(text) {
  console.log(text);
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  delbtn.innerHTML = "x";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.append(delbtn);
  todolist.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoinput.value;
  painttodo(currentValue);
  todoinput.value = "";
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
