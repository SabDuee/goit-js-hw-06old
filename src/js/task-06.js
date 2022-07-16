const inputText = document.querySelector("#validation-input");
const addClass = (oldClas,newClas)=>{
    if(inputText.classList.contains(oldClas))  return inputText.classList.replace(oldClas,newClas);
    inputText.classList.add(newClas);
}

inputText.addEventListener("blur",()=>{
    inputText.value.length === + inputText.dataset.length?addClass('invalid','valid'):addClass('valid','invalid');});