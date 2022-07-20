const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
const defaultValue = inputRef.valueAsNumber;

spanRef.style.fontSize = `${defaultValue}px`;

inputRef.addEventListener("input", event => {
 spanRef.style.fontSize = `${event.currentTarget.value}px`;
})
