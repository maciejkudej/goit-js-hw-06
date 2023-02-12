const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  console.log(" ");
  const categoryName = category.getElementsByTagName("h2");
  console.log(`Category: ${categoryName[0].textContent}`);

  const list = category.getElementsByTagName("ul");
  const listItems = list[0].getElementsByTagName("li");
  console.log(`Elements: ${listItems.length}`);
});
