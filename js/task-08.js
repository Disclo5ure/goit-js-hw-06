const form = document.getElementsByClassName("login-form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log({ login: email.value, password: password.value });
  e.currentTarget.reset();
});
