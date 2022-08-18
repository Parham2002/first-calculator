"use strict";

// i.e. input [3, +, 6, 32, -, 22]
var numberOne = document.querySelector(".buttons__item");
var inputArea = document.querySelector("input-area__box");

var calculator = function calculator(input) {
  inputArea += input;
  console.log(inputArea);
};