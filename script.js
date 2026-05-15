console.log("Hello World");

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

let firstNumber = "";
let currentOperator = "";
let secondNumber = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return " A value cannot be 0";
  }
  return a / b;
}

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (operator === "+") {
    return add(num1, num2);
  }

  if (operator === "-") {
    return subtract(num1, num2);
  }

  if (operator === "*") {
    return multiply(num1, num2);
  }

  if (operator === "/") {
    return divide(num1, num2);
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (currentOperator === "") {
      firstNumber += button.textContent;
      display.value = firstNumber;
    } else {
      secondNumber += button.textContent;
      display.value = secondNumber;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentOperator = button.textContent;
    // display.value = currentOperator;
  });
});

//    Equal button =

equalButton.addEventListener("click", () => {
  if (firstNumber === "" || secondNumber === "" || currentOperator === "") {
    return;
  }
  let result = operate(currentOperator, firstNumber, secondNumber);

  display.value = result;

  firstNumber = result;

  secondNumber = "";

  currentOperator = "";
});

clearButton.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";

  display.value = "";
});
