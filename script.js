// i.e. input [3, +, 6, 32, -, 22]

const numberOne = document.querySelector(".buttons__item")

let inputArea = document.querySelector("input-area__box")

const calculator = (input) => {
    inputArea += input
    console.log(inputArea)

}

