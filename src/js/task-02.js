const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listContainerEl = document.querySelector('#ingredients');

const elements = ingredients.map(value => {
  const itemEl = document.createElement('li');
  itemEl.textContent = value;
  itemEl.classList.add('item');

  return itemEl;
});

listContainerEl.append(...elements);


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

