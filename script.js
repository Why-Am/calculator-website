const [DIVIDE, MULTIPLY, SUBTRACT, ADD] = ["/", "*", "-", "+"];

const buttons = document.querySelector("#buttons");
const screen = document.querySelector("#screen");
const indicator = document.querySelector("#indicator");

let memory = [];
let screenValue = [];

function main() {
    buttons.addEventListener("click", buttonHandler);

    document.addEventListener("keydown", keyHandler);
}

function pressNumber(n) {
    if (memoryIsAnswer()) memory = [];

    screenValue.push(n);
    updateScreen();
}

function pressOperator(op) {
    addScreenValueToMemory();
    if (memoryIsEmpty()) {
        return;
    } else if (memoryIsN()) {
        memory.push(op);
        setIndicator(true);
        screenValue = [];
    } else if (memoryIsNOp()) {
        memory.splice(-1, 1, op);
    } else if (memoryIsNOpN()) {
        memory = [operate(...memory), op];
        updateScreen(memory[0].toString());
        screenValue = [];
    } else if (memoryIsAnswer()) {
        memory = [memory[1], op];
        setIndicator(true);
        screenValue = [];
    } else {
        throw new Error();
    }
}

function pressClear() {
    memory = [];
    screenValue = [];
    updateScreen();
}

function pressEquals() {
    addScreenValueToMemory();
    if (memoryIsEmpty() || memoryIsNOp() || memoryIsAnswer()) {
        return;
    } else if (memoryIsN()) {
        memory.splice(0, 0, "a");
    } else if (memoryIsNOpN()) {
        memory = ["a", operate(...memory)];
        setIndicator(false);
    }
    updateScreen(memory[1].toString());
    screenValue = [];
}

function buttonHandler(event) {
    switch (event.target.id) {
        case "button-one":
            pressNumber(1);
            break;
        case "button-two":
            pressNumber(2);
            break;
        case "button-three":
            pressNumber(3);
            break;
        case "button-four":
            pressNumber(4);
            break;
        case "button-five":
            pressNumber(5);
            break;
        case "button-six":
            pressNumber(6);
            break;
        case "button-seven":
            pressNumber(7);
            break;
        case "button-eight":
            pressNumber(8);
            break;
        case "button-nine":
            pressNumber(9);
            break;
        case "button-zero":
            pressNumber(0);
            break;
        case "button-clear":
            pressClear();
            break;
        case "button-divide":
            pressOperator(DIVIDE);
            break;
        case "button-multiply":
            pressOperator(MULTIPLY);
            break;
        case "button-subtract":
            pressOperator(SUBTRACT);
            break;
        case "button-add":
            pressOperator(ADD);
            break;
        case "button-equals":
            pressEquals();
            break;
        default: // Clicked on the body, not a button
            return;
    }
}

function keyHandler(event) {
    switch (event.key) {
        case "1":
            pressNumber(1);
            break;
        case "2":
            pressNumber(2);
            break;
        case "3":
            pressNumber(3);
            break;
        case "4":
            pressNumber(4);
            break;
        case "5":
            pressNumber(5);
            break;
        case "6":
            pressNumber(6);
            break;
        case "7":
            pressNumber(7);
            break;
        case "8":
            pressNumber(8);
            break;
        case "9":
            pressNumber(9);
            break;
        case "0":
            pressNumber(0);
            break;
        case "c":
            pressClear();
            break;
        case DIVIDE:
            pressOperator(DIVIDE);
            break;
        case MULTIPLY:
            pressOperator(MULTIPLY);
            break;
        case SUBTRACT:
            pressOperator(SUBTRACT);
            break;
        case ADD:
            pressOperator(ADD);
            break;
        case "=":
        case "Enter":
            pressEquals();
            break;
        default:
            return;
    }
}

function updateScreen(optionalValue) {
    screen.textContent =
        optionalValue === undefined ? screenValue.join("") : optionalValue;
}

function getScreenValue() {
    return parseFloat(screenValue.join(""));
}

function addScreenValueToMemory() {
    if (screenValue.length !== 0) memory.push(getScreenValue());
}

function setIndicator(value) {
    indicator.setAttribute("class", value ? "indicator-on" : "indicator-off");
}

function memoryIsEmpty() {
    return memory.length === 0;
}

function memoryIsN() {
    return memory.length === 1 && typeof memory[0] === "number";
}

function memoryIsNOp() {
    return memory[0] !== "a" && memory.length === 2;
}

function memoryIsNOpN() {
    return memory.length === 3;
}

function memoryIsAnswer() {
    return memory[0] === "a";
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
        case ADD:
            return add(a, b);
        case SUBTRACT:
            return subtract(a, b);
        case MULTIPLY:
            return multiply(a, b);
        case DIVIDE:
            return divide(a, b);
        default:
            throw new Error("Messed up majorly");
    }
}

main();
