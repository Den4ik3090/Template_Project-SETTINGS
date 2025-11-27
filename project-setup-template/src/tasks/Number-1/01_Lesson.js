const app = document.querySelector('#app');
app.innerHTML = '';

app.innerHTML = `
  <div class="card p-4">
    <h2>Задание 1: Приветствие</h2>
    <input type="text" id="nameInput" class="form-control mb-2" placeholder="Введите имя">
  </div>
`;

const btn = app.querySelector('#helloBtn');
const input = app.querySelector('#nameInput');
const result = app.querySelector('#result');

btn.addEventListener('click', () => {
  result.textContent = `Привет, ${input.value}!`;
});
