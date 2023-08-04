const input = document.getElementById("validation-input");

input.addEventListener("blur", (e) => {
  if (e.target.value.length === parseInt(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
