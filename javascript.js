


document.querySelector('#confirm_password').addEventListener('input', ()=>{
    validateForm();
});

const validateForm = () =>{
  
    const password = document.querySelector('#password');
    // console.log(password.value);
    const confirmPassword = document.querySelector('#confirm_password');
    // console.log(confirmPassword.value);
    const message = document.querySelector('#message');

    let isValid = true;

    if (password.value != confirmPassword.value)
        {
            console.log('Passwords don\'t match');
            password.classList.add('invalid');
            confirmPassword.classList.add('invalid');
            isValid = false;
            message.innerHTML = "* Passwords do not match"
            message.classList.add('error');



        }
        else {
            console.log('Passwords Match');
            password.classList.remove('invalid');
            confirmPassword.classList.remove('invalid');
            isValid = true;
        }
}