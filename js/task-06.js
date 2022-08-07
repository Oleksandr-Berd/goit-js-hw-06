const ref = {
  input: document.querySelector("#validation-input"),
};

function onInputBlur(event) {
  const validRef = event.currentTarget.value.length;
  const checkRef = ref.input.getAttribute("data-length");
  validRef === Number(checkRef)
    ? ref.input.classList.add("valid")
    : ref.input.classList.add("invalid");
}

ref.input.addEventListener("blur", onInputBlur);
