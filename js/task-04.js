let counterValue = 0;

const btnIncr = document.querySelector("button[data-action='increment']");

const btnDecr = document.querySelector("button[data-action='decrement']");

const valueRef = document.querySelector("#value");

valueRef.textContent = counterValue;

console.log(btnIncr);

btnIncr.addEventListener("click", (event) => {
  valueRef.textContent = counterValue += 1;
});

btnDecr.addEventListener("click", (event) => {
  valueRef.textContent = counterValue -= 1;
});
