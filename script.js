//2
function swapInputs() {
  let input1Value = document.getElementById("input1").value;
  let input2Value = document.getElementById("input2").value;

  document.getElementById("input1").value = input2Value;
  document.getElementById("input2").value = input1Value;
}
//4
let squareSize = 100;

const squareElement = document.querySelector(".square");
const decreaseButton = document.querySelector(".decrease");
const increaseButton = document.querySelector(".increase");

decreaseButton.addEventListener("click", () => {
  if (squareSize > 15) {
    squareSize -= 15;
    squareElement.style.width = squareSize + "px";
    squareElement.style.height = squareSize + "px";
  }
});

increaseButton.addEventListener("click", () => {
  squareSize += 15;
  squareElement.style.width = squareSize + "px";
  squareElement.style.height = squareSize + "px";
});
//6
const listItems = document.querySelectorAll(".list li");

const btnDouble = document.querySelector(".doubleValues");
btnDouble.addEventListener("click", function (e) {
  e.preventDefault();
  listItems.forEach(function (item) {
    const curValue = Number(item.textContent);
    const doubleValue = curValue * 2;
    item.textContent = doubleValue;
  });
});
//8
function handleLoginFormSubmit(loginForm) {
  event.preventDefault();

  const emailInput = loginForm.querySelector('input[name="email"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return false;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log("Form Data:", formData);

  loginForm.reset();

  return true;
}
//10
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let markup = "";
  let startWidth = 30;
  let starHeight = 30;
  for (let i = 0; i < amount; i++) {
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${startWidth}px; height: ${starHeight}px"></div>`;
    startWidth += 10;
    starHeight += 10;
  }
  boxStore.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxStore.innerHTML = "";
}

function isInputValid() {
  if (input.value > inputMax || input.value < inputMin) {
    alert(`Write in range from ${inputMin} to ${inputMax}`);
    input.value = 1;
  }
}

const boxStore = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls input");
const inputMin = Number(input.getAttribute("min"));
const inputMax = Number(input.getAttribute("max"));

input.value = 1;

createButton.addEventListener("click", () => createBoxes(input.value));
destroyButton.addEventListener("click", () => destroyBoxes());
input.addEventListener("input", () => isInputValid());
