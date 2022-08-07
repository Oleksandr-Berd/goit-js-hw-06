const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email;

  const password = formElements.password;

  const newObj = { mail, password };

  mail.value === "" || password.value === ""
    ? alert("Warning All fields have to be filled!")
    : (newObj.mail = mail.value),
    (newObj.password = password.value);
  console.log(newObj);
  form.reset();
}
