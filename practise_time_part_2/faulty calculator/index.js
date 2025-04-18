const val = document.getElementById("val");
const btn = document.getElementById("calculate");
const operatorVal = document.getElementById("operator-val")
let input1 = document.getElementById("input-el1");
let input2 = document.getElementById("input-el2");
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(`Random Number: ${randomNumber}`);
// let randomNumber = 1;

const obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

function calculation(num1, num2, operator) {

    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else {
        return num1 * num2;
    }
}

btn.addEventListener('click', function () {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    let c = operatorVal.value;
    if (randomNumber == 1) {
        c = obj[c]
    }
    console.log(c);
    
    const displayResult = calculation(num1, num2, c);
    val.textContent = displayResult;

    input1.value = "";
    input2.value = "";
    operatorVal.value = "";
})

