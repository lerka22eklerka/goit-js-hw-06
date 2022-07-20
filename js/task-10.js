
// function createBoxes(amount) {
//   amount = inputValue;
//   const divBoxes = document.createElement('div');
//   let width = 30;
//   let heigth = 30;
//   let backgroundColor;
//   for(let i = 1, i <=amount, i += 1) {
//     width += 10;
//     heigth += 10;
//     backgroundColor = getRandomHexColor();
//     divBoxes.append(width, heigth, backgroundColor)
// console.log(divBoxes);
//   }
// }

// const boxElements = divBoxes.map(({ width, heigth, backgroundColor}) =>
//   )
//   useBoxRef.append(...divBoxes);
  




// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const inputRef = document.querySelector('input');
// const btnCreateRef = document.querySelector("[data-create]");
// const btnDestroyRef = document.querySelector("[data-destroy]");
// const useBoxRef = document.querySelector("#boxes");

// let inputValue = 0;
// inputRef.addEventListener(`input`, (event) => {
//   return (inputValue = event.currentTarget.value);
// });

// function createBoxes(amount) {
//   amount = inputValue;
//   let divBoxes = [];
//   let width = 30;
//   let heigth = 30;
//   let backgroundColor;
//   for (let i = 1; i <= amount; i += 1) {
//     width += 10;
//     heigth += 10;
//     backgroundColor = getRandomHexColor();
//     divBoxes.push({ heigth: heigth, width: width, backgroundColor: backgroundColor });
//   }

//   const markup = divBoxes
//     .map(
//       ({ heigth, width, backgroundColor }) =>
//         `<div style="height: ${heigth}px; width: ${width}px; background-color: ${backgroundColor} "></div>`
//     )
//     .join(``);
//   useBoxRef.insertAdjacentHTML(`afterbegin`, markup);
// }

// function destroyBoxes() {
//   useBoxRef.innerHTML = ``;
// }

// btnCreateRef.addEventListener(`click`, createBoxes);
// btnDestroyRef.addEventListener(`click`, destroyBoxes);




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
  let heigth = 30;
  let backgroundColor;
  for (let i = 1; i <= amount; i += 1) {
    width += 10;
    heigth += 10;
    backgroundColor = getRandomHexColor();
    divBoxes.push({
      heigth: heigth,
      width: width,
      backgroundColor: backgroundColor,
    });
  }

  const markup = divBoxes
    .map(
      ({ heigth, width, backgroundColor }) =>
        `<div style="height: ${heigth}px; width: ${width}px; background-color: ${backgroundColor} "></div>`
    )
    .join(``);
  useBoxRef.insertAdjacentHTML(`afterbegin`, markup);
}

function destroyBoxes() {
  useBoxRef.innerHTML = ``;
}

btnCreateRef.addEventListener(`click`, createBoxes);
btnDestroyRef.addEventListener(`click`, destroyBoxes);