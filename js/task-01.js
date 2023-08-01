const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((elem) => {
  console.log(`Category: ${elem.getElementsByTagName("h2")[0].innerText}`);
  console.log("Elements: " + elem.getElementsByTagName("li").length);
});
