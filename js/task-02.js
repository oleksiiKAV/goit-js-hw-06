// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const h2 = document.querySelector('#title');
const title = document.createElement("h2");
title.textContent = "Vegetables";
h2.append(title);

const ingredientsList = document.querySelector('#ingredients');

// Итерируем по каждому ингредиенту и создаем новый элемент списка
ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');

  // Добавляем новый элемент в список
  ingredientsList.append(li);
});

