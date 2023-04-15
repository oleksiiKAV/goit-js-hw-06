// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов 
// в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку
//  Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает 
// столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию 
// getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function isBoxes() {
  let retXY = []
  if (boxes.lastChild !== null) {
    retXY[0] = Number.parseInt(boxes.lastChild.style.width) + 10
    retXY[1] = Number.parseInt(boxes.lastChild.style.height) + 10
    return retXY
  } return null;
}

function createBoxes(amount) {
  // let size = [30, 30];
  // let sz = isBoxes();
  // if (sz) {
  //   size = sz
  // }
  let size = isBoxes() ? isBoxes() : [30, 30];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size[0]}px`;
    box.style.height = `${size[1]}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    size[0] += 10;
    size[1] += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', destroyBoxes);
