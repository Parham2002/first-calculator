"use strict";

var inputArea = document.querySelector(".input-area__box");
var buttons = document.querySelectorAll(".buttons__item"); // buttons.addEventListener("click", (event) => {
//     inputArea.innerHTML += `${event.answer.value}`
// })
// 123 + 123

var calculate = function calculate(total) {
  var lst = [];

  for (i = 0; i < total.length; i++) {
    if (total[i] != " ") {
      lst.push(total[i]);
      console.log(lst);
    }
  }

  var answer = lst.join("");
  console.log(answer);
  return answer;
};

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.value == " = ") {
      inputArea.value = calculate(inputArea.value);
    } else if (button.value == "AC") {
      inputArea.value = "";
    } else {
      inputArea.value += button.value;
    }

    console.log(inputArea.value);
  });
});