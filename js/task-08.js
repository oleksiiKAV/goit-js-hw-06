{/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем 
свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */}
const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); //не забывайте отменять перезагружает страницу
    const formData = {};
    // проходимся по всем элементам формы
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        // проверяем, что это не кнопка отправки формы и элемент заполнен
        if (element.type !== 'submit' && element.value !== '') {
            // добавляем свойство в объект formData
            formData[element.name] = element.value;
        }
    }
    if (Object.values(formData).length !== 2) {
        // return console.log("Please fill in all the fields!");
        alert("Please fill in all the fields!");
    }
    console.table(formData);
    event.currentTarget.reset();
}