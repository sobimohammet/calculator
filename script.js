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
let operator;
let result;

clearBtn.addEventListener('click', () => {
    numberArrays = [];
    previous.textContent = '';
    current.textContent = '';
    currentValue = undefined;
    previousValue = undefined;
    operator = undefined;
})

//handle number buttons click event
numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (numberArrays.length < 16) {
            numberArrays.push(button.textContent);
            currentValue = parseFloat(numberArrays.join(''));
            if (operator == undefined) {
                current.textContent = numberArrays.join('');
            } else if (previous.textContent != '') {
                current.textContent = `${previous.textContent} ${operator} ${numberArrays.join('')}`;
            } else {
                current.textContent = `${previousValue}  ${operator} ${numberArrays.join('')}`;
            }
            
        }
    })
})

//handle operator buttons click event
operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (numberArrays.length == 0 && current.textContent == '') {
            numberArrays.push('-');
            current.textContent = numberArrays.join('');
        } else if (numberArrays.length>0) {
            if (button.textContent == '+') {
                operator = '+';
                current.textContent = `${currentValue} + `;
                if (previous.textContent != '') {
                    previous.textContent = `${Number(previous.textContent) + currentValue}`;
                } else if (previousValue == undefined) {
                    previous.textContent = '';
                } else if (previousValue != undefined) {
                    result = previousValue + currentValue;
                    previous.textContent = result;
                }
                previousValue = currentValue;
                numberArrays = [];
            }
            if (button.textContent == 'x') {
                operator = 'x';
                current.textContent = `${currentValue} x `;
                if (previous.textContent != '') {
                    previous.textContent = `${Number(previous.textContent) * currentValue}`;
                } else if (previousValue == undefined) {
                    previous.textContent = '';
                } else if (previousValue != undefined) {
                    result = previousValue * currentValue;
                    previous.textContent = result;
                }
                previousValue = currentValue;
                numberArrays = [];
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