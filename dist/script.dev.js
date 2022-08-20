"use strict";

var inputArea = document.querySelector(".input-area__box");
var buttons = Array.from(document.querySelectorAll(".buttons__item"));

var calculator = function calculator(values) {
  return new Function("return " + values)();
};

buttons.map(function (button) {
  button.addEventListener("click", function (ans) {
    switch (ans.target.innerText) {
      case "AC":
        inputArea.value = "";
        break;

      case "=":
        inputArea.value = calculator(inputArea.value);
        break;

      default:
        inputArea.value += ans.target.innerText;
    }
  });
});