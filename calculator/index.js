// let resultEl = document.getElementById("sum-el"),
// n1El = document.getElementById("n1-el"),
// n2El = document.getElementById("n2-el"),
// n1 = parseFloat(n1El.value)
// n2 = parseFloat(n2El.value)

// function add(){
//     resultEl.innerText = n1.innerText + n2.innerText
//     console.log("The add button clicked. Result = n1.innerText + n2.innerText = ", resultEl.innerText)
// }

// function subtract(){
//     resultEl.innerText = n1.innerText - n2.innerText
//     console.log("The subtract button clicked. Result = n1.innerText - n2.innerText = ", resultEl.innerText)
// }

// function multiply(){
//     resultEl.innerText = n1.innerText * n2.innerText
//     console.log("The multiply button clicked. Result = n1.innerText * n2.innerText = ", resultEl.innerText)
// }

// function divide(){
//     resultEl.innerText = n1.innerText / n2.innerText
//     console.log("The divide button clicked. Result = n1.innerText / n2.innerText = ", resultEl.innerText)
// }

// Mistakes
// 1
// ERROR: Values for n1 and n2 are retrieved outside the function. 
// This causes them to be assigned only once when the script loads, 
// and they won't update when the user enters new input. 
// SOLUTION: Retrieve values inside each function when performing calculations.

// 2
// ERROR: Using innerText for calculations instead of retrieving values from input fields.
// Since innerText is meant for displaying text inside an element, 
// operations will not work correctly, especially for numbers.
// SOLUTION: Use n1.value and n2.value with parseFloat() inside functions for proper calculations.

let resultEl = document.getElementById("sum-el"),
    n1 = document.getElementById("n1-el"),
    n2 = document.getElementById("n2-el");

function add() {
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    resultEl.innerText = "RESULT: " + (num1 + num2);
    console.log("ADD clicked.", resultEl.innerText);
}

function subtract() {
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    resultEl.innerText = "RESULT: " + (num1 - num2);
    console.log("SUBTRACT clicked.", resultEl.innerText);
}

function multiply() {
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    resultEl.innerText = "RESULT: " + (num1 * num2);
    console.log("MULTIPLY clicked.", resultEl.innerText);
}

function divide() {
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    resultEl.innerText = num2 !== 0 ? "RESULT: " + (num1 / num2) : "ERROR: Division by zero!";
    console.log("DIVIDE clicked.", resultEl.innerText);
}