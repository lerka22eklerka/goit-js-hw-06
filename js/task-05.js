const inputRef = document.querySelector("#name-input");
const spanOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value !== '') {
spanOutputRef.textContent = event.currentTarget.value;
  } else {
    spanOutputRef.textContent = "Anonymous";
  }   
}
