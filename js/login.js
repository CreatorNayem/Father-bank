document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-input');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password-input');
    const userPassword = passwordField.value;
    if(userEmail === "baper@bank.com" && userPassword === "123456"){
        window.location.href = './innerPage/bank.html';
    }
    else{
        alert('Password Vulay Gacoc Tai Na!! Toray Ami Tejjo Sontan Korlam... JA JA')
    }
    emailField.value = " ";
    passwordField.value = "";
})