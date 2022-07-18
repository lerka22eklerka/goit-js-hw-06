const inputRef = document.querySelector("#name-input");
const spanOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);
function onInputChange(event) {
  spanOutputRef.textContent = event.currentTarget.value;
}
