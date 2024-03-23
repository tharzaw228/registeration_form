let userName = document.getElementById('name');
let nameError = document.getElementById("nameError");
let form = document.getElementById("myForm");
let email = document.getElementById('email');
let emailError = document.getElementById("emailError");
let pwd1 = document.getElementById("password1");
let pwd2 = document.getElementById("password2");
let pwdError1 = document.getElementById("pwdError1");
let pwdError2 = document.getElementById("pwdError2");

function validateForm() {

}


function showNameError() {
    if (userName.value === "") {
        nameError.innerHTML = "Enter name";
    }
}

function isEmailValid(userEmail) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(userEmail);
}

function showEmailError() {
    if (email.value === "") {
        emailError.innerHTML = "Enter email";
    } else if (!isEmailValid(email.value)) {
        emailError.innerHTML = "Enter a valid email";
    }
}

function isPasswordStrong(userPassword) {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passPattern.test(userPassword);
}


function showPwdError1() {
    if (pwd1.value === "") {
        pwdError1.innerHTML = "Enter password";
    } else if (!isPasswordStrong(pwd1.value)) {
        pwdError1.innerHTML = "Your Password is not strong enough";
    }
}

function showPwdError2() {
    if (pwd2.value === "") {
        pwdError2.innerHTML = "Enter password";
    } else if (!isPasswordStrong(pwd2.value)) {
        pwdError2.innerHTML = "Your Password is not strong enough";
    } else if (pwd1.value !== pwd2.value) {
        pwdError2.innerHTML = "Your passwords don't match";
    }
}

userName.addEventListener('focus', function() {
    nameError.innerHTML = "";
});

userName.addEventListener('blur', showNameError);

email.addEventListener('focus', function() {
    emailError.innerHTML = "";
});

email.addEventListener('blur', showEmailError);

pwd1.addEventListener('focus', function() {
    pwdError1.innerHTML = "";
});

pwd1.addEventListener('blur', showPwdError1);

pwd2.addEventListener('focus', function() {
    pwdError2.innerHTML = "";
});

pwd2.addEventListener('blur', showPwdError2);