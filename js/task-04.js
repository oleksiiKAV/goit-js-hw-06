// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const counterValueSpan = document.getElementById("value");
const incButton = document.querySelector('[data-action="increment"]');
const decButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incButton.addEventListener("click", () => {
    counterValue++;
    counterValueSpan.textContent = counterValue;
});

decButton.addEventListener("click", () => {
    counterValue--;
    counterValueSpan.textContent = counterValue;
});

// по зажатой кнопке
let intervalId = null;
incButton.addEventListener("mousedown", () => {
    intervalId = setInterval(() => {
        counterValue++;
        counterValueSpan.textContent = counterValue;
    }, 100);
});

decButton.addEventListener("mousedown", () => {
    intervalId = setInterval(() => {
        counterValue--;
        counterValueSpan.textContent = counterValue;
    }, 100);
});

// Обработка отжатия миши
window.addEventListener("mouseup", () => {
    clearInterval(intervalId);
});
//играемся с элементами

const heading = document.createElement("h3");
heading.style.color = '#21a327'

heading.style.border = '2px solid'
heading.textContent = "Increment and decrement value";
document.querySelector("#counter").before(heading) //добавление элемента

document.querySelector("#counter").style.border = 'red 2px solid'
document.querySelector("#counter").style.width = '180px'

document.querySelector("#counter").style.padding = '10px 30px'

