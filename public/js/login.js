
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collects values from the login form
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.PreventDefault();

  const username = document.querySelector("#enter-username").value.trim();
  const email = document.querySelector("#enter-email").value.trim();
  const password = document.querySelector("#enter-password").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);