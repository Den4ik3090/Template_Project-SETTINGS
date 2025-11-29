const app = document.querySelector('#app');
app.innerHTML = '';
app.innerHTML = `
    
    <div class="container">
        <div class="panel" id="one_card">
          <h3>Elephant</h3>
        </div>
        <div class="panel" id="two_card">
          <h3>Explore The World</h3>
        </div>
        <div class="panel" id="three_card">
          <h3>Night Sicy</h3>
        </div>
        <div class="panel" id="four_card">
          <h3>Best Ocean</h3>
        </div>
        <div class="panel" id="five_card">
          <h3>Moscow Winter</h3>
        </div>
        <div class="panel" id="six_card">
          <h3>Best Elephant</h3>
        </div>
      </div>
      `;

// Импорт Изображений
import elephantBg from '../../assets/images/lessons_3/best-elephant-background-z426t6cacwavev5j.jpg';
const cardOne = document.querySelector('#one_card');
cardOne.style.backgroundImage = `url('${elephantBg}')`;

import card2 from '../../assets/images/lessons_3/best-background.jpg';
const cadrTwo = document.querySelector('#two_card');
cadrTwo.style.backgroundImage = `url('${card2}')`;

import card3 from '../../assets/images/lessons_3/miami-city-lights-w3fw4vqcv6p5xpue.jpg';
const cardThree = document.querySelector('#three_card');
cardThree.style.backgroundImage = `url('${card3}')`;

import card4 from '../../assets/images/lessons_3/pretty-ocean-sx1zlxx57dj9lf7n.jpg';
const cardFour = document.querySelector('#four_card');
cardFour.style.backgroundImage = `url('${card4}')`;

import card5 from '../../assets/images/lessons_3/winter-forest-beside-a-lake-f76haek1dhaxbbly.webp';
const cardFive = document.querySelector('#five_card');
cardFive.style.backgroundImage = `url('${card5}')`;

import card6 from '../../assets/images/lessons_3/pretty-ocean-sx1zlxx57dj9lf7n.jpg';
const cardSix = document.querySelector('#six_card');
cardSix.style.backgroundImage = `url('${card6}')`;

// ------------------------------------------------

// --------------Логика переключения ------------------------

const panels = document.querySelectorAll('.panel');

panels.forEach((e) => {
  e.addEventListener('click', () => {
    removeActiveClasses();
    e.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
//CСкрывать если кликаем вне блока
document.addEventListener('click', (event) => {
  const isClickInside = app.contains(event.target);
  if (!isClickInside) {
    removeActiveClasses();
  }
});
