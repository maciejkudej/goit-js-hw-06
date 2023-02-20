const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const fieldsToLog = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  console.log(fieldsToLog);
  event.currentTarget.reset();
}
