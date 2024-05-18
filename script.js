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
    alert("Будь ласка, заповність всі поля");
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
function colorFunc() {
  return `#${Math.trunc(Math.random() * 16777215).toString(16)}`;
}

function box(quantity) {
  let content = "";
  let startWidth = 10;
  let starHeight = 10;
  for (let i = 0; i < quantity; i++) {
    content += `<div style="background-color: ${colorFunc()}; width: ${startWidth}px; height: ${starHeight}px"></div>`;
    startWidth += 10;
    starHeight += 10;
  }
  boxStore.insertAdjacentHTML("beforeend", content);
}

function deleteBox() {
  boxStore.innerHTML = "";
}

function correctInput() {
  if (input.value > inputMax || input.value < inputMin) {
    alert(`Напишіть число з ${inputMin} по ${inputMax}`);
    input.value = 1;
  }
}

const boxStore = document.querySelector("#box");
const createButton = document.querySelector("[data-create]");
const deleteButton = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls input");
const inputMin = Number(input.getAttribute("min"));
const inputMax = Number(input.getAttribute("max"));

input.value = 1;

createButton.addEventListener("click", () => box(input.value));
deleteButton.addEventListener("click", () => deleteBox());
input.addEventListener("input", () => correctInput());

//9

function backColor() {
  const change = colorFunc();
  document.body.style.backgroundColor = change;
  document.querySelector(".color").textContent = change;
}
document.addEventListener("DOMContentLoaded", (event) => {
  const changeColorButton = document.querySelector(".changeCcolor");
  changeColorButton.addEventListener("click", backColor);
});
