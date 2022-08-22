"use strict";

// Calculator project
// Taking inputs from the HTML code
var inputArea = document.querySelector(".input-area__box");
var buttons = Array.from(document.querySelectorAll(".buttons__item")); // Using a function constructor since usage of eval()
// is not recommended for calculations

var Calculator = function Calculator(values) {
  return new Function("return " + values)();
}; // Using .map iterator to make a new array out of buttons array


buttons.map(function (button) {
  // Using .addEventListener to respond to events occuring on the page
  button.addEventListener("click", function (ans) {
    // Using a switch case to filter out some button inputs
    switch (ans.target.innerText) {
      case "AC":
        inputArea.value = "";
        break;

      case "=":
        inputArea.value = Calculator(inputArea.value);
        break;

      case "%":
        inputArea.value += "/100";
        break;

      default:
        inputArea.value += ans.target.innerText;
        break;
    }
  });
});