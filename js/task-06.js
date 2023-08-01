const input = document.getElementById("validation-input");

input.addEventListener("blur", (e) =>
  e.target.value.length === parseInt(input.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid")
);
