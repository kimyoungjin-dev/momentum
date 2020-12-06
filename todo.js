const todoform = document.querySelector(".js-todoform");
const todoinput = todoform.querySelector("input");
const todolist = document.querySelector(".js-todolist");

function painttodo(text) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  delbtn.innerText = "x";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delbtn);
  todolist.append(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoinput.value;
  painttodo(currentValue);
  todoinput.value = "";
}

function loadName() {
  const todos = localStorage.getItem("todos");
  if (todos === null) {
  } else {
  }
}

function init() {
  loadName();
  todoform.addEventListener("submit", handleSubmit);
}
init();
