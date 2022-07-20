function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

btnChangeColor.addEventListener("click", () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanColorRef.textContent = `${bodyRef.style.backgroundColor}`;
});
