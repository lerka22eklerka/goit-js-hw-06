function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");
const useBoxRef = document.querySelector("#boxes");

btnCreateRef.addEventListener("click", () => {
  useBoxRef.addEventListener("click", createBoxes);
});
btnDestroyRef.addEventListener("click", () => {
  useBoxRef.removeEventListener("click", createBoxes);
});


function createBoxes(amount) {
  const divBoxes = document.createElement('div');
  const elements = divBoxes *= amount;
  useBoxRef.append(...divBoxes);
  console.log(divBoxes);
}
