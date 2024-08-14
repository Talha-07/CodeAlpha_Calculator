function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    const display = document.getElementById('display');
    if (number === '.' && display.value.includes('.')) return;
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch (e) {
        display.value = 'Error';
    }
}
