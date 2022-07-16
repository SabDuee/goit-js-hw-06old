const listItem = () => {
    return document.querySelectorAll('.item').length;
}
console.log(`Number of categories: ${listItem()}`);
const titleItem = () => {
    const items = document.querySelectorAll('.item');
    for (const item of items) {
        const titleText = item.querySelector('h2').textContent;
        const numberItem = item.querySelectorAll('li').length;
        console.log(`Category: ${titleText}`);
        console.log(`Elements: ${numberItem}`);
    }
}
titleItem()
