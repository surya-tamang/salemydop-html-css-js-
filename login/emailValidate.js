
//// email validation

let errorMessage = document.querySelector('#errorMsg');
let email = document.querySelector('#email');
let button = document.querySelector('button');
let validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener('click', () => {
    if (email.value.match(validation)) {
        errorMessage.innerHTML = "";
        return true;
    }
    else {
        document.querySelector('input').style.outlineColor = "red";
        document.querySelector('input').style.color = "red";
        errorMessage.innerHTML = "Enter Valid email !!"
        return false
    }
});


