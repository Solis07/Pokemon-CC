async function signupForm(event) {
  event.PreventDefault();

  const firstName = document.querySelector('#enter-firstname').value.trim();
  const lastName = document.querySelector("#enter-lastname").value.trim();
  const email = document.querySelector("#enter-email").value.trim();
  const password = document.querySelector("#enter-password").value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch('/', {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
      headers: { "Content-Type": 'application/json' },
    });

    if (response.ok) {
      document.location.replace();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.account-details').addEventListener('submit', signupForm);