const inputArea = document.querySelector(".input-area__box")
const buttons = document.querySelectorAll(".buttons__item")
// buttons.addEventListener("click", (event) => {
//     inputArea.innerHTML += `${event.answer.value}`
// })


// 123 + 123
const calculate = (total) => {
    let lst = []
    for (i=0; i<total.length; i++) {
        if (total[i] != " ") {
            lst.push(total[i])
            console.log(lst)
        }

    }
    const answer = lst.join("")
    console.log(answer)
    return(answer)
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
 
        if (button.value == " = ") {
            inputArea.value = calculate(inputArea.value)
        } else if (button.value == "AC") {
            inputArea.value = ""
        } else {
            inputArea.value += button.value
        }
        console.log(inputArea.value)


    })
}) 