let counterValue = 0;

const valueDisplay = document.getElementById("value");
const incButton = document.querySelector('button[data-action="increment"]');
const decButton = document.querySelector('button[data-action="decrement"]');

decButton.addEventListener("click", () => {
  counterValue--;
  valueDisplay.innerHTML = counterValue;
});

incButton.addEventListener("click", () => {
  counterValue++;
  valueDisplay.textContent = counterValue;
});
