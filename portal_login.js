// ---------- LOGIN SYSTEM ---------- //
const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");

// Hardcoded credentials (replace with backend later)
const USERNAME = "admin";
const PASSWORD = "12345";

// If already logged in → redirect to portal
if (localStorage.getItem("loggedIn") === "true") {
  window.location.href = "index.html";
}

// Handle login submit
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === USERNAME && pass === PASSWORD) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html"; // ✅ redirect after login
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});
