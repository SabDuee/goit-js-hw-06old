const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener("input",()=>{
    nameOutput.textContent = nameInput.value === ''?'Anonymous': nameInput.value});