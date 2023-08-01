const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (e) => {
  e.target.value
    ? (output.innerText = e.target.value)
    : (output.innerText = "Anonymous");
});
