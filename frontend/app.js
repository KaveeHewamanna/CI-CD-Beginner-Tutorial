const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");
const forgotLink = document.getElementById("forgotLink");

function setMessage(text, type) {
  message.textContent = text;
  message.className = `message active ${type}`;
}

function clearErrors() {
  emailError.textContent = "";
  passwordError.textContent = "";
  message.textContent = "";
  message.className = "message";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

togglePassword.addEventListener("click", () => {
  const isPassword = password.type === "password";
  password.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Hide" : "Show";
  togglePassword.setAttribute(
    "aria-label",
    isPassword ? "Hide password" : "Show password"
  );
});

forgotLink.addEventListener("click", (e) => {
  e.preventDefault();
  setMessage("Forgot password link clicked.", "success");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  let isValid = true;

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (password.value.trim().length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (!isValid) {
    setMessage("Please fix the errors and try again.", "error");
    return;
  }

  setMessage("Login successful.", "success");.

  console.log("Login Data:", {
    email: email.value,
    password: password.value,
    rememberMe: document.getElementById("rememberMe").checked
  });
});