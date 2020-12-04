const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

function saveName(text) {
  localStorage.setItem("currentUser", text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
}

function askForName() {
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove("showing");
  greetings.classList.add("showing");
  greetings.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
