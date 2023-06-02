let buttons = document.querySelectorAll('button');
let display = document.querySelector('.top');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = button.textContent;
    })
})