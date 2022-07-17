const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listRef = document.createElement("li");
    listRef.textContent = ingredient;
    listRef.classList.add("item");
    return listRef;
  });
};

const elements = makeList(ingredients);
const makeListContainerRef = document.querySelector("#ingredients");
makeListContainerRef.append(...elements);

console.log(makeListContainerRef);
