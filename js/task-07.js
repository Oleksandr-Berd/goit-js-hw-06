const ref = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

ref.input.addEventListener("input", changeFont);

function changeFont(event) {
  const checkedValue = event.currentTarget.value;

  ref.text.style.fontSize = `${checkedValue}px`;
}
