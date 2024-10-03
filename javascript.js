document.querySelector('form').addEventListener('input', ()=>{
    validateForm();
});

const validateForm = () =>{
  
    const password = document.querySelector('#password');
    // console.log(password.value);
    const confirmPassword = document.querySelector('#confirm_password');
    // console.log(confirmPassword.value);

    let isValid = true;

    if (password.value != confirmPassword.value)
        {
            console.log('Passwords don\'t match');
            isValid = false;


        }
        else {
            console.log('Passwords Match');
        }
}