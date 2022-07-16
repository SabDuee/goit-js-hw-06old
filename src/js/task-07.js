const scrolBar = document.querySelector('input#font-size-control');
const spanText = document.querySelector('#text');
scrolBar.addEventListener("input",()=>{spanText.setAttribute('style',`font-size:${scrolBar.value}px`)});