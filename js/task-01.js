const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesRef.length}`);

const titleNameRef = document.querySelectorAll("h2");
const amountItemRef = document.querySelectorAll("li.item > ul");

console.log(`Category: ${titleNameRef[0].textContent}`);
console.log(`Elements: ${amountItemRef[0].children.length}`);

console.log(`Category: ${titleNameRef[1].textContent}`);
console.log(`Elements: ${amountItemRef[1].children.length}`);

console.log(`Category: ${titleNameRef[2].textContent}`);
console.log(`Elements: ${amountItemRef[2].children.length}`);
