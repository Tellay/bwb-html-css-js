const loginForm = document.getElementById("login-form");

const emailField = document.getElementById("email");
const emailError = document.getElementById("email-error");

const passwordField = document.getElementById("password");
const passwordError = document.getElementById("password-error");

function validateLoginForm(event) {
  event.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";

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

  if (isValid) {
    loginForm.reset();
    window.location.href = "./dashboard.html";
  }
}

loginForm.addEventListener("submit", validateLoginForm);
