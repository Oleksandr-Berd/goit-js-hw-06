function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");

const colRef = document.querySelector(".color");

const bodyRef = document.querySelector("body");

function onColorChange(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();

  colRef.textContent = bodyRef.style.backgroundColor;

  console.log(colRef);
}
btnRef.addEventListener("click", onColorChange);
