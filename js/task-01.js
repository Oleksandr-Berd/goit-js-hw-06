const categItemRef = document.querySelectorAll("ul#categories li.item");

const numOfCateg = categItemRef.length;

console.log("Number of categories: ", numOfCateg);

categItemRef.forEach((element) => {
  const elemRefTitle = element.firstElementChild;

  const textTitle = elemRefTitle.textContent;

  console.log("Category: ", textTitle);

  const elemQuantity = element.querySelectorAll("li").length;

  console.log("Elements: ", elemQuantity);
});
