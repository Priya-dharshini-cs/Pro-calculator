const numbers = document.querySelectorAll('.number');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const result = document.querySelector('.result span');

let firstValue = '';
let secondValue = '';
let sign = '';
let resultValue = 0;

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        let value = e.target.textContent;
        if (sign === '') {
            firstValue += value;
            result.textContent = firstValue;
        } else {
            secondValue += value;
            result.textContent = secondValue;
        }
    });
});

signs.forEach((signButton) => {
    signButton.addEventListener('click', (e) => {
        sign = e.target.textContent;
        result.textContent = '';
    });
});

equals.addEventListener('click', () => {
    if (sign === '+') {
        resultValue = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (sign === '-') {
        resultValue = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (sign === 'x') {
        resultValue = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (sign === '/') {
        resultValue = parseFloat(firstValue) / parseFloat(secondValue);
    }
    result.textContent = resultValue;
    firstValue = '';
    secondValue = '';
    sign = '';
});

clear.addEventListener('click', () => {
    result.textContent = '0';
    firstValue = '';
    secondValue = '';
    sign = '';
});