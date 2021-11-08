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
const modalClose = document.querySelectorAll(".close");
const submitBtn = document.querySelector(".btn-submit");
const formCheck = document.querySelector("#checkbox1");
const nameErr = document.querySelector("#first");
const lastNameErr = document.querySelector("#last");
const emailErr = document.querySelector("#email");
const quantity = document.querySelector("#quantity");
const validCity = document.querySelector("#valid-city");
const errStar = document.querySelector("#required-star");
const checkCondition = document.querySelector("#required-check");
const formIsValid = document.querySelector("#valid-form");
const signUp = document.querySelector("#btn-signup");

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

submitBtn.addEventListener("submit", noReload);

function validForm() {
  formIsValid.style.display = "flex";
}

function hideSignup() {
  signUp.style.display = "none";
}

// check if conditions true

function validate() {
  if (formCheck.checked === false) {
    checkCondition.style.display = "flex";
    errStar.style.display = "inline-block";
    return false;
  }
  return true;
}


//function that check if at least one radio button is selected

function check() {
  if (quantity.value == 0) {
    return true;
  }
  var radios = document.getElementsByName("location");
  for (var i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  validCity.style.display = "flex";
  return false;
}

function noReload(event) {
    event.preventDefault();
}

//appropriate error messages

nameErr.addEventListener('input', _e => {
  if (nameErr.validity.patternMismatch) {
    nameErr.setCustomValidity('Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
  } else {
    nameErr.setCustomValidity('');
  }
})

lastNameErr.addEventListener('input', _e => {
  if (lastNameErr.validity.patternMismatch) {
    lastNameErr.setCustomValidity('Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  } else {
    lastNameErr.setCustomValidity('');
  }
})

emailErr.addEventListener('input', _e => {
  if (emailErr.validity.patternMismatch) {
    emailErr.setCustomValidity("L'email saisi n'est pas valide (exemple@exemple.com).");
  } else {
    emailErr.setCustomValidity('');
  }
})

quantity.addEventListener('input', _e => {
  if (quantity.validity.patternMismatch) {
    quantity.setCustomValidity("Veuillez entrer un chiffre.");
  } else {
    quantity.setCustomValidity('');
  }
})