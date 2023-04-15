// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое
// на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
    // textInput.value = "";
    if (Number(textInput.getAttribute("data-length")) !== textInput.value.length) {
        textInput.classList.add("invalid")
        textInput.classList.remove("valid")
    } else {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid")
    }
});