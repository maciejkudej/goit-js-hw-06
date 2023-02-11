const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i++){
    console.log(' ');
    const categoryName = categories[i].getElementsByTagName('h2');
    console.log(`Category: ${categoryName[0].textContent}`);

    const list = categories[i].getElementsByTagName('ul');
    const listItems = list[0].getElementsByTagName("li");
    console.log(`Elements: ${listItems.length}`);
}