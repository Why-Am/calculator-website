const buttons = document.querySelector("#buttons");
const screen = document.querySelector("#screen");

let a, operator, b;
let screenValue = [];

function main() {
    buttons.addEventListener("click", buttonHandler);

    document.addEventListener("keydown", keyHandler);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    switch (operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "add":
            return multiply(a, b);
        case "add":
            return divide(a, b);
        default:
            throw new Error("Messed up majorly");
    }
}

function buttonHandler(event) {
    switch (event.target.id) {
        case "button-one":
            screenValue.push(1);
            break;
        case "button-two":
            screenValue.push(2);
            break;
        case "button-three":
            screenValue.push(3);
            break;
        case "button-four":
            screenValue.push(4);
            break;
        case "button-five":
            screenValue.push(5);
            break;
        case "button-six":
            screenValue.push(6);
            break;
        case "button-seven":
            screenValue.push(7);
            break;
        case "button-eight":
            screenValue.push(8);
            break;
        case "button-nine":
            screenValue.push(9);
            break;
        case "button-zero":
            screenValue.push(0);
            break;
        case "button-clear":
            // TODO
            break;
        case "button-divide":
            // TODO
            break;
        case "button-multiply":
            // TODO
            break;
        case "button-subtract":
            // TODO
            break;
        case "button-add":
            // TODO
            break;
        case "button-equals":
            // TODO
            break;
        default: // Clicked on the body, not a button
            return;
    }
    updateScreen();
}

function keyHandler(event) {
    switch (event.key) {
        case "1":
            screenValue.push(1);
            break;
        case "2":
            screenValue.push(2);
            break;
        case "3":
            screenValue.push(3);
            break;
        case "4":
            screenValue.push(4);
            break;
        case "5":
            screenValue.push(5);
            break;
        case "6":
            screenValue.push(6);
            break;
        case "7":
            screenValue.push(7);
            break;
        case "8":
            screenValue.push(8);
            break;
        case "9":
            screenValue.push(9);
            break;
        case "0":
            screenValue.push(0);
            break;
        case "c": // TODO
            console.log("got it");
            break;
        case "/": // TODO
            console.log("got it");
            break;
        case "*": // TODO
            console.log("got it");
            break;
        case "-": // TODO
            console.log("got it");
            break;
        case "+": // TODO
            console.log("got it");
            break;
        case "=": // TODO
        case "Enter":
            console.log("got it");
            break;
        default:
            return;
    }
    console.log(screenValue);
    updateScreen();
}

function updateScreen() {
    screen.textContent = screenValue.join("");
}

main();
