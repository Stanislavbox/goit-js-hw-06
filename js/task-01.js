const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

[...categoriesEl.children].forEach(item => {
      console.log(`Categories: ${item.firstElementChild.textContent}`)
      console.log(`Elements: ${item.lastElementChild.children.length}`)
})