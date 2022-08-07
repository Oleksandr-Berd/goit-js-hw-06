const inputRef = document.querySelector("#name-input");

const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", subInp);

function subInp(event) {
  if (inputRef.value === "") {
    return (nameRef.textContent = "Anonymous");
  }
  return (nameRef.textContent = inputRef.value);
}
