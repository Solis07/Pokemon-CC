const users = [];
async function loginForm(event) {
  event.preventDefault();
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    console.log(email, password);
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(await response.json());
    if (response.ok) {
      document.location.replace();
    } else {
      alert((await response.json()).message);
    }
  }
}