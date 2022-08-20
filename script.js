let inputArea = document.querySelector(".input-area__box")
let buttons = Array.from(document.querySelectorAll(".buttons__item"))

const calculator = (values) => {
    return new Function("return " + values)();
}


buttons.map( button => {
    button.addEventListener("click", (ans) => {
        switch (ans.target.innerText){
            case "AC":
               inputArea.value= "";
               break;
            case "=":
                inputArea.value = calculator(inputArea.value);
                break;
            default:
                inputArea.value += ans.target.innerText;
        }
    })
})