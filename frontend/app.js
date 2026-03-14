// Simple login proof-of-concept.
// In a real app, you would send credentials to a backend API and handle responses securely.

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const messageEl = document.getElementById("message");

const MOCK_USER = {
  email: "user@example.com",
  password: "password123",
};

function resetErrors() {
  emailError.textContent = "";
  passwordError.textContent = "";
  messageEl.textContent = "";
  messageEl.className = "message";
}

function validateForm() {
  let valid = true;
  resetErrors();

  if (!emailInput.value.trim()) {
    emailError.textContent = "Email is required.";
    valid = false;
  }

  if (!passwordInput.value) {
    passwordError.textContent = "Password is required.";
    valid = false;
  }

  return valid;
}

function handleLogin(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    messageEl.textContent = "Login successful! Welcome back.";
    messageEl.classList.add("success");
    form.reset();
  } else {
    messageEl.textContent = "Invalid credentials. Try: user@example.com / password123";
    messageEl.classList.add("error");
  }
}

form.addEventListener("submit", handleLogin);
