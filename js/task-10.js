function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateRef = document.querySelector("button[data-create]");
const btnDestRef = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("#controls > input");
const boxRef = document.querySelector("#boxes");

let inputAmount = 0;

function createAmount(event) {
  inputAmount = Number(event.currentTarget.value);
  return inputAmount;
}

function createBoxes(amount) {
  amount = inputAmount;

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
    newDiv.classList.add("new-div");
    boxRef.append(newDiv);
  } while (i < amount);
  console.log(boxRef);
}

function destroyAll(event) {
  const byeEl = document.querySelectorAll(".new-div");
  byeEl.forEach((element) => element.remove());
}

inputRef.addEventListener("input", createAmount);

btnCreateRef.addEventListener("click", createBoxes);

btnDestRef.addEventListener("click", destroyAll);
