const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingList = [];

ingredients.forEach((elem) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = elem;
  ingList.push(ingredient);
});

const list = document.getElementById("ingredients");

list.append(...ingList);
