const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(item => {
const titleNameRef = item.querySelector("h2");
    const amountItemRef = item.querySelectorAll("li");
    console.log(`Category: ${titleNameRef.textContent}`);
    console.log(`Elements: ${amountItemRef.length}`);
})
