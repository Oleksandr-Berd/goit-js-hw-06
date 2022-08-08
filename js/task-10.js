function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateRef = document.querySelector("button[data-create]");
const btnDestRef = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("#controls > input");
const boxRef = document.querySelector("#boxes");

let amount = 0;

function createAmount(event) {
  amount = Number(event.currentTarget.value);
  return amount;
}

function launchEvent(event) {
  let i = 0;
  let width = 10;
  let height = 10;

  do {
    i += 1;
    width += 10;
    height += 10;
    const newDiv = document.createElement("div");
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxRef.append(newDiv);
    console.log(boxRef);
  } while (i < amount);
}

inputRef.addEventListener("input", createAmount);

btnCreateRef.addEventListener("click", launchEvent);
