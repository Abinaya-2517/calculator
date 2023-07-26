let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendToDisplay(value) {
    if (value === '←') {
        backspace();
    } else {
        displayValue += value;
        updateDisplay();
    }
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}
function toggleSign() {
    let currentValue = parseFloat(display.value);
    display.value = -currentValue;
}