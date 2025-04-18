//Exercise 2: Basic calculator

let num1 = prompt("Enter the first number:");
num1 = parseFloat(num1)
let operator = prompt("Enter operator (-, +, /, *):");
let num2 = prompt("Enter second number:");
num2 = parseFloat(num2);

let result;
if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        alert("Error:Division by zero is not allowed!");
        result = "Undefined";
    }
} else {
    alert("Invalid operator! Please use (-, +, *, or /)");
    result = "Undefined";
}
// show result
alert("Result: " + result);