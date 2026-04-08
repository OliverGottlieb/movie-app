"use strict";

const countDisplay = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");

console.log(countDisplay);
console.log(clickButton);
console.log(resetButton);

let count = 0;

clickButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;
});

resetButton.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});
