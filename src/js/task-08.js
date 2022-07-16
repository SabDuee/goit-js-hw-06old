
const formLogin = document.querySelector('.login-form');
const formSubmit = ()=>{
    event.preventDefault();
    const email = document.querySelector('[name=email]')
    const password = document.querySelector('[name=password]')
    if(email.value===''&&password.value===''){
        alert('потрібно заповнити всі поля!');
    } 
    else
    {
        console.log({[email.name]:email.value,[password.name]:password.value,}); 
    formLogin.reset(); 
}  
}
formLogin.addEventListener("submit",formSubmit)