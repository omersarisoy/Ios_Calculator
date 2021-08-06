let output = document.querySelector(".output")
let numbers = document.getElementsByClassName("content")
let operator = document.querySelectorAll(".operator")
let equal = document.getElementsByClassName("equal")[0]
let clear = document.querySelector(".clear")
console.log(equal)


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        if (output.textContent == "0") {
            output.textContent = ""
        } else {
            output.textContent += numbers[i].textContent
        }
    })
}

operator.forEach(omerement => {
    omerement.addEventListener("click", () => {
        output.textContent += omerement.textContent
    })
})

equal.addEventListener("click", function () {
    output.textContent = eval(output.textContent)
})

clear.addEventListener("click", () => {
    output.textContent = ""
})