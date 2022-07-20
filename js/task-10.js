function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");
const useBoxRef = document.querySelector("#boxes");

let inputValue = 0;
inputRef.addEventListener(`input`, (event) => {
  return (inputValue = event.currentTarget.value);
});

function createBoxes(amount) {
  amount = inputValue;
  let divBoxes = [];
  let width = 30;
  let height = 30;
  let backgroundColor;
  for (let i = 1; i <= amount; i += 1) {
    width += 10;
    height += 10;
    backgroundColor = getRandomHexColor();
    divBoxes.push({
      height: height,
      width: width,
      backgroundColor: backgroundColor,
    });
  }
  const sortOut = divBoxes
    .map(
      ({ height, width, backgroundColor }) => {
        const divRef = document.createElement("div");
        divRef.style.backgroundColor = backgroundColor;
        divRef.style.width = `${width}px`;
        divRef.style.height = `${height}px`;
        return divRef;
      }            
  );
  useBoxRef.append(...sortOut);
}

function destroyBoxes() {
  useBoxRef.innerHTML = ``;
}

btnCreateRef.addEventListener(`click`, createBoxes);
btnDestroyRef.addEventListener(`click`, destroyBoxes);