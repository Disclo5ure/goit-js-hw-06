function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBut = document.querySelector("button[data-create]");
const destroyBut = document.querySelector("button[data-destroy]");
const container = document.getElementById("boxes");
let size = 30;

createBut.addEventListener("click", () => {
  for (let i = 1; i <= input.value; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    container.append(box);
    size += 10;
  }
});

destroyBut.addEventListener("click", () => {
  container.innerHTML = "";
  size = 30;
  input.value = "";
});
