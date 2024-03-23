let userName = document.getElementById('name');
let nameError = document.getElementById("nameError");
let form = document.getElementById("myForm");
let email = document.getElementById('email');
let emailError = document.getElementById("emailError");
let pwd1 = document.getElementById("password1");
let pwd2 = document.getElementById("password2");
let pwdError1 = document.getElementById("pwdError1");
let pwdError2 = document.getElementById("pwdError2");
let hobbiesError = document.getElementById('hobbiesError');
let genderError = document.getElementById('genderError');
let classError = document.getElementById('classError');

function validateForm() {
    let isValid = true;
    
    if (userName.value.trim() === "") {
        nameError.innerHTML = "Enter name";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    if (email.value.trim() === "") {
        emailError.innerHTML = "Enter email";
        isValid = false;
    } else if (!isEmailValid(email.value)) {
        emailError.innerHTML = "Enter a valid email";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    if (pwd1.value.trim() === "") {
        pwdError1.innerHTML = "Enter password";
        isValid = false;
    } else if (!isPasswordStrong(pwd1.value)) {
        pwdError1.innerHTML = "Your Password is not strong enough";
        isValid = false;
    } else {
        pwdError1.innerHTML = "";
    }

    if (pwd2.value.trim() === "") {
        pwdError2.innerHTML = "Enter password";
        isValid = false;
    } else if (pwd1.value !== pwd2.value) {
        pwdError2.innerHTML = "Your passwords don't match";
        isValid = false;
    } else {
        pwdError2.innerHTML = "";
    }

    let genderRadios = document.querySelectorAll('input[type="radio"][name="gender"]');
    let isGenderSelected = false;

    genderRadios.forEach(function(radio) {
        if (radio.checked) {
            isGenderSelected = true;
        }
    });

    if (!isGenderSelected) {
        event.preventDefault(); // Prevent form submission
        let genderError = document.getElementById('genderError');
        genderError.textContent = "Please select a gender";
    }

    let hobbiesCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    let isAtLeastOneChecked = false;

    hobbiesCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            isAtLeastOneChecked = true;
        }
    });

    if (!isAtLeastOneChecked) {
        event.preventDefault(); // Prevent form submission
        let hobbiesError = document.getElementById('hobbiesError');
        hobbiesError.textContent = "Please select at least one hobby";
    }
    /*
    let classSelect = document.getElementById('classDropDown');
    let selectedClass = classSelect.textContent.trim();
    let classError = document.getElementById('classError');

    if (selectedClass === "Class") {
        event.preventDefault(); // Prevent form submission
        classError.textContent = "Please select a class";
    }
    */

    return isValid;
}

function isEmailValid(userEmail) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(userEmail);
}

function isPasswordStrong(userPassword) {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passPattern.test(userPassword);
}

// Attach event listeners
userName.addEventListener('focus', function() {
    nameError.innerHTML = "";
});

userName.addEventListener('blur', function() {
    if (userName.value === "") {
        nameError.innerHTML = "Enter name";
    }
});

email.addEventListener('focus', function() {
    emailError.innerHTML = "";
});

email.addEventListener('blur', function() {
    if (email.value === "") {
        emailError.innerHTML = "Enter email";
    } else if (!isEmailValid(email.value)) {
        emailError.innerHTML = "Enter a valid email";
    }
});

pwd1.addEventListener('focus', function() {
    pwdError1.innerHTML = "";
});

pwd1.addEventListener('blur', function() {
    if (pwd1.value === "") {
        pwdError1.innerHTML = "Enter password";
    } else if (!isPasswordStrong(pwd1.value)) {
        pwdError1.innerHTML = "Your Password is not strong enough";
    }
});

pwd2.addEventListener('focus', function() {
    pwdError2.innerHTML = "";
});

pwd2.addEventListener('blur', function() {
    if (pwd2.value === "") {
        pwdError2.innerHTML = "Enter password";
    } else if (pwd1.value !== pwd2.value) {
        pwdError2.innerHTML = "Your passwords don't match";
    }
});

function clearErrors() {
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    pwdError1.innerHTML = "";
    pwdError2.innerHTML = "";
    hobbiesError.innerHTML = "";
    genderError.innerHTML = "";
    classError.innerHTML = "";
}

// Function to validate form

// Event listener for reset button
form.addEventListener('reset', function() {
    clearErrors(); // Clear error messages when the form is reset
});