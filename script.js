//create variables for buttons and calculator screen
let previous = document.querySelector('.previous');
let current = document.querySelector('.current');
let decimalBtn = document.querySelector('.dot');
let equalsBtn = document.querySelector('.equals');
let clearBtn = document.querySelector('.delete');
let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator');
let btns = document.querySelectorAll('button');

//global variable and arrays
let numberArrays = [];
let currentValue;
let previousValue;

clearBtn.addEventListener('click', () => {
    numberArrays = [];
    previous.textContent = '';
    current.textContent = '';
    currentValue = undefined;
    previousValue = undefined;
})

//handle number buttons click event
numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (numberArrays.length < 16) {
            numberArrays.push(button.textContent);
            currentValue = parseFloat(numberArrays.join(''));
            current.textContent = numberArrays.join('');
        }
    })
})

//handle operator buttons click event
operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (numberArrays.length == 0) {
            numberArrays.push('-');
            current.textContent = currentValue;
        } else if (numberArrays.length>0) {
            if (button.textContent == '+') {
                current.textContent = `${currentValue} + `;
                numberArrays = [];
                /* previousValue += currentValue;  */
                previousValue = 7;
                previous.textContent = previousValue;
            }
        }
    })
})

decimalBtn.addEventListener('click', () => {
    if (numberArrays.indexOf('.') == -1) {
        if (numberArrays.length == 0) {
            numberArrays.push('0.');
            currentValue = parseFloat(numberArrays.join(''));
            current.textContent = numberArrays.join('');
        } else {
            numberArrays.push('.');
            currentValue = parseFloat(numberArrays.join(''));
            current.textContent = numberArrays.join('');
        }
    }
})

//To fix
//decimal at the begining