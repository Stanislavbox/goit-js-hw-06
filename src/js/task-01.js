const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

[...categoriesEl.children].forEach(item => {
      console.log(`Categories: ${item.firstElementChild.textContent}`)
      console.log(`Elements: ${item.lastElementChild.children.length}`)
})

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5