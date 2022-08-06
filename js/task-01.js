const categItemRef = document.querySelectorAll("ul#categories li.item");

console.log(categItemRef);

const numOfCateg = categItemRef.length;

console.log("Number of categories: ", numOfCateg);

categItemRef.forEach((element) => {
  const elemRef = element;
  
  const elemRefTitle = elemRef.firstElementChild;

  const textTitle = elemRefTitle.textContent;

  console.log("Category: ", textTitle);

  const elemQuantity = elemRef.querySelectorAll("li").length;

  console.log("Elements: ", elemQuantity);
});

