function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');

const destroyBoxes = () => {
  const boxs = document.querySelectorAll('#boxes div');
  for(const item of boxs){
   item.remove();
  }
}
const createBoxes = (amount) => {
let array=[];

for(let i=0;i<amount;i += 1){
  const element = document.createElement('div');
  element.setAttribute("style",`background-color:${getRandomHexColor()}; height:${30+10*i}px; width:${30+10*i}px`);
  array.push(element);
}
destroyBoxes();
box.append(...array);
}

btnCreate.addEventListener("click",()=>{createBoxes(input.value)});
btnDestroy.addEventListener('click',destroyBoxes);