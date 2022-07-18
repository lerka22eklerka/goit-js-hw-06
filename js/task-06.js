const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  if (event.currentTarget.value.length === 6) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
