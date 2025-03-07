/* eval() allows you to execute a string of code as if it were actual JavaScript code.
While it is a useful tool, it is a security risk. I would recommend using eval() ONLY for learning purposes and not any actual production code. */ 

// script.js
let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Use eval to evaluate the expression (Note: Avoid eval for user-input production apps for security)
        display.value = eval(display.value);
    } catch (err) {
        display.value = 'Error';
    }
}
