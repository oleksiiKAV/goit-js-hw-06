// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
// элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

// Выводим количество категорий в списке
console.log(`В списке ${categoriesItems.length} категории.`);

// Итерируем по каждому элементу списка и выводим информацию о нём
categoriesItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryItemsCount = item.querySelectorAll('li').length;

    console.log(`Категория: ${categoryName}`);
    console.log(`Количество элементов: ${categoryItemsCount}`);
});
