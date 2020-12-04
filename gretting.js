const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

function paintGreeting(text) {
  form.classList.remove(showing);
  greeting.classList.add("showing");
  greeting.innertext = `hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem("currentUser");
  console.log(currentUser);
  if (currentUser === null) {
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  localStorage.setItem("currentUser", "youngjin");
  loadName();
}
init();
