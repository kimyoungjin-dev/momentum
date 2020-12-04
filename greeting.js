const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

function paintGreeting(text) {
  form.classList.remove("showing");
  greetings.classList.add("showing");
  greetings.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
