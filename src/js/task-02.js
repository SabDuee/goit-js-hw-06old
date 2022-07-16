const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const insertItem = (items) => {
 const list = document.querySelector('#ingredients')
  let array = [];
for(const text of items){
const item = document.createElement(`li`);
item.classList.add('item');
item.textContent = text;
array.push(item);
}
list.append(...array);
}
insertItem(ingredients);