console.dir(document);

const categRef = document.querySelector('#categories');

const categItemRef = categRef.querySelectorAll('.item');

console.log(categItemRef);

const numOfCateg = categItemRef.length;

console.log('Number of categories: ', numOfCateg);