const signUpForm = document.getElementById("signup-form");

const emailField = document.getElementById("email");
const emailError = document.getElementById("email-error");

const passwordField = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const confirmPasswordField = document.getElementById("confirm-password");
const confirmPasswordError = document.getElementById("confirm-password-error");

function validateSignUpForm(event) {
  event.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  if (emailField.value.trim() === "") {
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
    isValid = false;
  } else if (!emailField.value.includes("@")) {
    emailError.textContent = "Invalid email";
    emailError.style.display = "block";
    isValid = false;
  }

  if (passwordField.value.trim() === "") {
    passwordError.textContent = "Password is required";
    passwordError.style.display = "block";
    isValid = false;
  } else if (passwordField.value.length < 3) {
    passwordError.textContent = "Password must be at least 3 characters";
    passwordError.style.display = "block";
    isValid = false;
  }

  if (confirmPasswordField.value.trim() === "") {
    confirmPasswordError.textContent = "Confirm password is required";
    confirmPasswordError.style.display = "block";
    isValid = false;
  } else if (confirmPasswordField.value !== passwordField.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPasswordError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    signUpForm.reset();
    window.location.href = "./dashboard.html";
  }
}

signUpForm.addEventListener("submit", validateSignUpForm);
