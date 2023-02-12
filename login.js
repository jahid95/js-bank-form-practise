document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    console.log(emailValue);
    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value;
    console.log(passwordValue);

    if(emailValue === 'anwar@gmail.com' && passwordValue === 'jahid'){
        window.location.href ='bank.html';
    }
    else{
        console.log('Invalid user email and password')
    }
})