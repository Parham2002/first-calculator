// Calculator project

// Taking inputs from the HTML code
let inputArea = document.querySelector(".input-area__box")
let buttons = Array.from(document.querySelectorAll(".buttons__item"))

// Using a function constructor since usage of eval()
// is not recommended for calculations
const calculator = (values) => {
    return new Function("return " + values)();
}

// Using .map iterator to make a new array out of buttons array
buttons.map( button => {
    // Using .addEventListener to respond to events occuring on the page
    button.addEventListener("click", (ans) => {
        // Using a switch case to filter out some button inputs
        switch (ans.target.innerText){
            case "AC":
               inputArea.value= "";
               break;
            case "=":
                inputArea.value = calculator(inputArea.value);
                break;
            default:
                inputArea.value += ans.target.innerText;
                break;
        }
    })
})