const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrRef = ingredients.map((element) => {
  const elemRef = document.createElement("li");

  elemRef.textContent += element;

  elemRef.classList.add("item");

  return elemRef;
});

const listRef = document.querySelector("ul#ingredients");

listRef.append(...arrRef);

console.log(listRef);
