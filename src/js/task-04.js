const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

buttonPlus.addEventListener('click', ()=>{counterValue.textContent = + counterValue.textContent + 1; }) ;
buttonMinus.addEventListener('click', ()=>{counterValue.textContent -= 1; }) ;