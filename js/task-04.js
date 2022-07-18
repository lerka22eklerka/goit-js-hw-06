const spanValueRef = document.querySelector("#value");
const incrBtnRef = document.querySelector('[data-action="increment"]');
const decrBtnRef = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrBtnRef.addEventListener("click", () => {
  counterValue += 1;
  spanValueRef.textContent = counterValue;
});

decrBtnRef.addEventListener("click", () => {
  counterValue -= 1;
  spanValueRef.textContent = counterValue;
});
