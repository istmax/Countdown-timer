const buttonStart = document.querySelector(".button-start");
const buttonStop = document.querySelector(".button-stop");
const buttonReset = document.querySelector(".button-reset");
const input = document.querySelector(".input");
const number = document.querySelector(".numbers");
let interval;

function timer() {
  if (number.textContent > 0) {
    number.textContent--;
    if (input.value < 0 || number.textContent === 0) {
      input.value = 0;
      number.textContent = 0;
    }
  }
}

buttonStart.addEventListener("click", function () {
  if (input.value < 0) {
    input.value = 0;
    number.textContent = 0;
  }

  number.textContent = input.value;
  clearInterval(interval);
  interval = setInterval(timer, 1000);
});

buttonStop.addEventListener("click", function () {
  clearInterval(interval);
});

buttonReset.addEventListener("click", function () {
  input.value = 0;
  number.textContent = 0;
});
