const calculator = (numOne, operator, numTwo) => {
    numOne = parseFloat(numOne)
    numTwo = parseFloat(numTwo)
    
    switch(operator) {
        case ("+"):
            return numOne + numTwo;
            break;
        case ("-"):
            return numOne - numTwo;
            break;
        case ("*"):
            return numOne * numTwo;
            break;
        case ("/"):
            return numOne / numTwo
            break;
    }
}

console.log(calculator("5.5", "+", "5"))
console.log(calculator("5.5", "-", "5"))
console.log(calculator("5.5", "*", "5"))
console.log(calculator("5.5", "/", "5"))
