'use strict';
const app = document.querySelector('#app');
app.innerHTML = '';

app.innerHTML = `
  <main>
    <div class="container_input">
      <input
        type="text"
        id="city-input"
        class="input input-primary"
        placeholder="Введите город"
      />
      <button class="search-button btn btn-primary">Найти</button>
    </div>
    <div class="temperature-block"></div>
  </main>
`;

//Weather APP

const input = document.querySelector('#city-input');
const button = document.querySelector('.search-button');

button.addEventListener('click', () => {
  const city = input.value.trim();
  if (city) {
    getWheather(city);
  } else {
    alert('Введите город');
  }
});

async function getWheather(city) {
  const apiKey = 'BWW4XCUU2W9FANPA2SJ4J6Z47'; // Ваш ключ API
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}&unitGroup=metric&lang=ru`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const tempblock = document.querySelector('.temperature-block');

    tempblock.innerHTML = `
	        <div class="tb_block">
          <h2>Температура в городе ${city}</h2>
          <p class="text_title">
            Сейчас на улице :
            <span class="temperature">${Math.floor(data.currentConditions.temp)}°C</span>
          </p>
          <span class="condition_inner">
        <p class="conditions">${data.currentConditions.conditions} <img src="../../assets/images/wheather/${data.currentConditions.icon}.png" /></p>
          </span>
          <button class="clear__btn btn btn-primary">Очистить</button>
        </div>
		`;
    const clear = document.querySelector('.clear__btn');

    clear.addEventListener('click', () => {
      tempblock.innerHTML = '';
    });
  } catch (error) {
    console.error('Ошибка !');
  }
}
