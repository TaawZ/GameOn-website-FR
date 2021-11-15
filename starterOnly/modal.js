function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const inputs = document.querySelectorAll(".text-control");
const firstNameInput = inputs[0];
const surnameInput = inputs[1];
const emailInput = inputs[2];
const modalClose = document.querySelectorAll(".close");
const formCheck = document.querySelector("#checkbox1");
const quantity = document.querySelector("#quantity");
const checkCondition = document.querySelector("#required-check");
const submitBtn = document.querySelector("#submit-btn")
const formIsValid = document.querySelector(".valid-form");
const signUp = document.querySelector("#btn-signup");
const regexEmail = /.+@.+..+/;
const regexNames = /[a-zA-Z]{2,}/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// display confirmation message on submit

function validForm() {
  formIsValid.style.display = "flex";
}

function hideSignup() {
  signUp.style.display = "none";
}

// Valid all inputs in the form
function validate() {
  const resultName = regexNames.test(firstNameInput.value);
  const resultSurname = regexNames.test(surnameInput.value);
  const resultEmail = regexEmail.test(emailInput.value);
  const birthDate = !!(Date.parse(inputs[3].value));

  var hasLocation = false;
  if (quantity.value > 0) {    
    var radios = document.getElementsByName("location");
    for (var i = 0, len = radios.length; i < len; i++) {
      if (radios[i].checked) {
        hasLocation = true;
        break;
      }
    }
  }
  const locationChecked = quantity.value == 0 || hasLocation;
  const rules = formCheck.checked;

  formData[0].setAttribute('data-error-visible', !resultName);
  formData[1].setAttribute('data-error-visible', !resultSurname);
  formData[2].setAttribute('data-error-visible', !resultEmail);
  formData[3].setAttribute('data-error-visible', !birthDate);
  formData[5].setAttribute('data-error-visible', !locationChecked);
  formData[6].setAttribute('data-error-visible', !rules);

  if(resultEmail && resultName && resultSurname && birthDate && locationChecked && rules) 
  {  
    validForm();
    hideSignup();
    closeModal();
  }
  return false;
}