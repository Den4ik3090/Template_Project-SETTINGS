import logoImg from '../../assets/images/lesson_5/logo.png';
import coffeeBlastImg from '../../assets/images/lesson_5/coffee_blast.png';
import cofeeImg from '../../assets/images/lesson_5/cofee.png';
import menuCappuchino from '../../assets/images/lesson_5/menu/Cappuchino.png';
import menuLatte from '../../assets/images/lesson_5/menu/Latte.png';
import menuMockiato from '../../assets/images/lesson_5/menu/Mockiato.png';
import menuEspresso from '../../assets/images/lesson_5/menu/Espresso.png';
import iconBadge from '../../assets/images/lesson_5/icons/badge 1.png';
import iconBeans from '../../assets/images/lesson_5/icons/coffee-beans 1.png';
import iconCup from '../../assets/images/lesson_5/icons/coffee-cup 1.png';
import iconPrice from '../../assets/images/lesson_5/icons/best-price 1.png';
import coffeeBeanBg from '../../assets/images/lesson_5/coffee_bean.png';
import cupBg from '../../assets/images/lesson_5/cup.png';
import avatarMan from '../../assets/images/lesson_5/avatar/avatar_man.png';
import avatarWoman from '../../assets/images/lesson_5/avatar/avatar_wooman.png';
import blast from '../../assets/images/lesson_5/coffee_blast.png';
import iconf from '../../assets/images/lesson_5/icons/Facabook.png';
import iconInst from '../../assets/images/lesson_5/icons/Insta.png';
import iconYT from '../../assets/images/lesson_5/icons/YouTube.png';
import iconTwitter from '../../assets/images/lesson_5/icons/Twitter.png';
import cupTea from '../../assets/images/lesson_5/cup-tea.png';

const app = document.querySelector('#app');
app.innerHTML = '';

app.innerHTML = `
    <!-- HEADER -->
    <header class="header">
      <nav class="navbar container-fluid px-5 px-md-5 py-2 py-md-4">
        <div class="navbar__logo">
          <a href="/" class="navbar__logo-link">
            <img src="${logoImg}" class="navbar__logo-img" alt="Bean Scene Logo" />
          </a>
        </div>
        <div class="navbar__menu d-none d-md-block">
          <ul class="navbar__list list-unstyled d-flex gap-5 m-0">
            <li class="navbar__item"><a href="#" class="navbar__link btn">Домой</a></li>
            <li class="navbar__item"><a href="#menu" class="navbar__link btn">Меню</a></li>
            <li class="navbar__item"><a href="#about" class="navbar__link btn">О нас</a></li>
            <li class="navbar__item"><a href="#" class="navbar__link btn">Контакты</a></li>
          </ul>
        </div>
        <div class="navbar__actions d-flex gap-2 mt-2 mt-md-0">
          <button type="button" class="btn btn-warning btn-sm navbar__btn">Sign In</button>
          <button type="button" class="btn btn-warning btn-sm navbar__btn">Sign Up</button>
        </div>
        <button class="burger d-inline-flex d-md-none" id="burgerBtn" type="button" aria-label="Menu" aria-expanded="false" aria-controls="mobileMenu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>

    <!-- Mobile menu -->
    <div class="navbar__menu-burger d-none" id="mobileMenu">
      <ul class="navbar__list-burger list-unstyled d-flex m-0">
        <li class="navbar__item"><a href="#" class="navbar__link_burger btn">Домой</a></li>
        <li class="navbar__item"><a href="#menu" class="navbar__link_burger btn">Меню</a></li>
        <li class="navbar__item"><a href="#about" class="navbar__link_burger btn">О нас</a></li>
        <li class="navbar__item"><a href="#" class="navbar__link_burger btn">Контакты</a></li>
      </ul>
    </div>

    <main class="main">
      <!-- HERO SECTION -->
      <section class="hero container-fluid px-3">
        <div class="row align-items-center">
          <div class="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start hero__content">
            <p class="hero__subtitle text-uppercase small">Мы позаботимся о том, чтобы ваш день начинался с вкусного</p>
            <h1 class="hero__title display-4 fw-bold mb-5 mt-5">Coffee</h1>
            <p class="hero__description mb-4 col-md-10 mt-2">Краткое описание, пару строк текста про сервис или сайт, почему этот кофе особенный.</p>
            <div class="hero__actions d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#menu" class="btn subscribe__btn-input btn-warning rounded-pill  py-3 shadow-sm btn-hover-effect">ЗАКАЗАТЬ</a>
              <a href="#menu" class="btn subscribe__btn-input btn-danger btn-outline-light py-3 btn_menu">МЕНЮ</a>
            </div>
          </div>
          <div class="col-12 col-md-6 hero__media"></div>
        </div>
      </section>

      <!-- DISCOVER SECTION -->
      <section class="discover container-fluid">
        <figure>
          <img src="${coffeeBlastImg}" class="img_blast-discover " alt="" />
          <img src="${coffeeBlastImg}" class="img_blast-discoverRight d-md-none" alt="" />
        </figure>
        <div class="row align-items-center">
          <div class="col-12 col-md-6 discover__content">
            <h2 class="discover__title">Discover the best coffee</h2>
            <p class="discover__text">Секрет нашего кофе прост и сложен одновременно. Мы отбираем только 100% арабику класса Specialty с лучших ферм Эфиопии, Бразилии и Колумбии. Каждая партия проходит авторскую обжарку, чтобы сохранить уникальные ноты шоколада, цитрусов или ягод.

Для нас «лучший кофе» — это не просто слова. Это утренний ритуал, который задает ритм вашему дню.</p>
            <button type="button" class="btn discover__btn  btn-warning rounded-pill  py-2 shadow-sm btn-hover-effect ">Подробнее</button>
          </div>
          <div class="col-12 col-md-6 text-end discover__media position-relative">
            <img src="${cofeeImg}" class="discover__img img-fluid" alt="Cup of coffee" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- MENU SECTION -->
      <section class="menu py-5" id="menu">
        <div class="container text-center">
          <div class="menu__header mb-5">
            <h2 class="menu__title">Попробуйте кофе в новом, особенном формате.</h2>
            <p class="menu__subtitle">Попробуйте все оттенки вкуса нашего кофе...</p>
          </div>
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <article class="h-100"><div class="card h-100 border-0 shadow-sm product-card">
                  <div class="product-card__img-wrapper card-img-top-wrapper"><img src="${menuCappuchino}" class="card-img-top" alt="Cappuccino" loading="lazy" /></div>
                  <div class="card-body d-flex flex-column"><h3 class="card-title fw-bold">Капучино</h3><p class="card-text text-muted small">Кофе 50% | Молоко 50%</p><div class="mt-auto text-center"><span class="fw-bold d-block">200руб</span><button type="button" class="btn btn-warning">Order Now</button></div></div>
                </div></article>
              </div>
              <div class="swiper-slide">
                <article class="h-100"><div class="card h-100 border-0 shadow-sm product-card">
                  <div class="product-card__img-wrapper card-img-top-wrapper"><img src="${menuLatte}" class="card-img-top" alt="Hot Chocolate" loading="lazy" /></div>
                  <div class="card-body d-flex flex-column"><h3 class="card-title fw-bold">Горячий шоколад</h3><p class="card-text text-muted small">Эспрессо 40мл | Молоко 120мл</p><div class="mt-auto text-center"><span class="fw-bold d-block">250руб</span><button type="button" class="btn btn-warning">Order Now</button></div></div>
                </div></article>
              </div>
              <div class="swiper-slide">
                <article class="h-100"><div class="card h-100 border-0 shadow-sm product-card">
                  <div class="product-card__img-wrapper card-img-top-wrapper"><img src="${menuMockiato}" class="card-img-top" alt="Macchiato" loading="lazy" /></div>
                  <div class="card-body d-flex flex-column"><h3 class="card-title fw-bold">Макиато</h3><p class="card-text text-muted small">Кофе 70% | Молоко 30%</p><div class="mt-auto text-center"><span class="fw-bold d-block">300руб</span><button type="button" class="btn btn-warning">Order Now</button></div></div>
                </div></article>
              </div>
              <div class="swiper-slide">
                <article class="h-100"><div class="card h-100 border-0 shadow-sm product-card">
                  <div class="product-card__img-wrapper card-img-top-wrapper"><img src="${menuEspresso}" class="card-img-top" alt="Espresso" loading="lazy" /></div>
                  <div class="card-body d-flex flex-column"><h3 class="card-title fw-bold">Эспрессо</h3><p class="card-text text-muted small">Кофе 100%</p><div class="mt-auto text-center"><span class="fw-bold d-block">350руб</span><button type="button" class="btn btn-warning">Order Now</button></div></div>
                </div></article>
              </div>
              <div class="swiper-slide">
                  <article class="h-100"><div class="card h-100 border-0 shadow-sm product-card">
                  <div class="product-card__img-wrapper card-img-top-wrapper"><img src="${menuLatte}" class="card-img-top" alt="Matcha" loading="lazy" /></div>
                  <div class="card-body d-flex flex-column"><h3 class="card-title fw-bold">Матча</h3><p class="card-text text-muted small">Кофе 50% | Молоко 50%</p><div class="mt-auto text-center"><span class="fw-bold d-block">200руб</span><button type="button" class="btn btn-warning">Order Now</button></div></div>
                </div></article>
              </div>
            </div>
            <div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      <!-- ABOUT SECTION -->
      <section class="about" id="about">
        <div class="about__text-block"><h1 class="text-block__title">Чем мы отличаемся?</h1><p class="text-block__text">Мы варим не просто кофе...</p></div>
        <div class="about__card row container-fluid py-4">
          <div class="card-item col-12 col-md-3 p-md-0"><div class="card-item__img"><img src="${iconBadge}" alt="" /></div><div class="card-item__block"><h2 class="block_title">Свежие зерна</h2><p class="block_text">Свежесть кофе которую ты точно почувствуешь</p></div></div>
          <div class="card-item col-12 col-md-3 p-md-0"><div class="card-item__img"><img src="${iconBeans}" alt="" /></div><div class="card-item__block"><h2 class="block_title">Высокое качество</h2><p class="block_text">Уделяем внимание каждой мелочи </p></div></div>
          <div class="card-item col-12 col-md-3 p-md-0"><div class="card-item__img"><img src="${iconCup}" alt="" /></div><div class="card-item__block"><h2 class="block_title">Большой выбор</h2><p class="block_text">Кофе под любое настроение.</p></div></div>
          <div class="card-item col-12 col-md-3 p-md-0"><div class="card-item__img"><img src="${iconPrice}" alt="" /></div><div class="card-item__block"><h2 class="block_title">Лучшие цены</h2><p class="block_text">Удивляем не только вкусом ,но и ценой!</p></div></div>
          <div class="text-block__bottom"><p class="text-block__title-bottom m-0">Отличные идеи начинаются с отличного кофе</p><h2 class="text-block__h2-bottom m-0">Начни уже сегодня </h2></div>
          <button class="btn  btn-warning rounded-pill px-5 py-2 shadow-sm btn-hover-effect text-block__bottom-btn ">Будь частью нашей команды !</button>
        </div>
      </section>

      <section class="breakfast">
        <div class="container"><div class="row justify-content-center justify-content-lg-start">
          <div class="breakfast__text-block col-12 col-sm-10 col-md-8 col-lg-6 pt-3 pt-md-5 text-center text-lg-start">
            <h1 class="breakfast__title display-5 fw-bold mb-3">Воспользуйся шансом провести свое лучшее утро </h1>
            <p class="breakfast__text lead mb-4">С чашечкой нашего кофе...</p>
            <button class="btn subscribe__btn-input btn-warning rounded-pill px-5 py-2 shadow-sm btn-hover-effect">Order Now</button>
          </div>
        </div></div>
        <figure><img src="${coffeeBeanBg}" alt="Coffee" class="breakfast__bg-image" /></figure>
        <figure><img src="${cupBg}" alt="Coffee" class="breakfast__bg-image-cup d-none d-md-block" /></figure>
      </section>
    </main>

    <!-- Section FEEDBACK -->
    <section class="feedback">
      <h1 class="feedback__title">Отзывы о нашем идеальном кофе</h1>
      <p class="feedback__text">За наше качество , говорят наши клиенты </p>
      <div class="feedback__slider">
        <button class="feedback__btn-left btn btn-warning" aria-label="Предыдущий отзыв">←</button>
        <button class="feedback__btn-rigth btn btn-warning" aria-label="Следующий отзыв">→</button>
        <div class="feedback__blocks-container">
          <div class="feedback__block feedback__block--active">
            <p class="feedback__block-text">Отличное заведение , крутой ремонт, прекрасное обслуживание и кончено же классный коллектив. Ах да , кофе выше всех пекрас. Спасибо что стараетесь для нас !</p>
            <h2 class="feedback__block-name">Grishaev Denis</h2>
            <p class="feedback__block-prof">Project Manager</p>
            <img src="${avatarMan}" alt="Grishaev Denis" class="feedback__block-photo" />
          </div>
          <div class="feedback__block">
            <p class="feedback__block-text">Качество кофе на высоте!Самый вкусный латте который пил в городе. Респект вашему баристе !</p>
            <h2 class="feedback__block-name">Анна Петрова</h2>
            <p class="feedback__block-prof">Бариста</p>
            <img src="${avatarWoman}" alt="Анна Петрова" class="feedback__block-photo" />
          </div>
          <div class="feedback__block">
            <p class="feedback__block-text">Идеальное место для работы и встреч.Дружелюбный и приветливый прерсонал.Буду приходить чаще.</p>
            <h2 class="feedback__block-name">Михаил Сидоров</h2>
            <p class="feedback__block-prof">Дизайнер</p>
            <img src="" alt="Михаил Сидоров" class="feedback__block-photo" />
          </div>
           
        </div>
      </div>
               <img src="${blast}" alt="" class="img-blast-left " />
                   <img src="${blast}" alt="" class="img-blast-right" />

    </section>

<!-- Subscribe Section -->
<section class="subscribe-section">
  <div class="subscribe__block">
    <h1 class="subscribe__title">Подпишитесь, чтобы получать последние новости</h1>
    <p class="subscribe__text">Не пропустите наши последние новости, обновления, советы и специальные предложения</p>
    
    <!-- ВАЖНО: Контейнер-обертка для формы -->
    <div class="subscribe__form-container">
      
      <!-- 1. Поле ввода (Bootstrap Floating Label) -->
      <div class="form-floating text-dark subscribe__input-wrapper">
        <input type="email" class="form-control subscribe__input" id="subscribeEmail" placeholder="name@example.com">
        <label for="subscribeEmail">Введите адрес электронной почты</label>
      </div>

      <!-- 2. Кнопка (Отдельно от инпута) -->
      <button class="btn subscribe__btn-input btn-warning rounded-pill px-5 py-3 shadow-sm btn-hover-effect">
        Подписаться
      </button>

    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="footer">
    <!-- Декор (скроем на мобильных) -->
    <img src="${cupTea}" class="footer-img__cup-left" alt="cup-tea">
    <img src="${cupTea}" class="footer-img__cup-right" alt="cup-tea">

    <!-- Левый блок (Logo + Social) -->
    <div class="footer__block-left">
      <h2 class="block-left__title">
        <a href="/" class="navbar__logo-link">
          <img src="${logoImg}" class="navbar__logo-img" alt="Bean Scene Logo" />
        </a>
      </h2>
      <p class="block-left__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div class="block-left_icon">
        <img src="${iconf}" class="footer_icon" alt="facebook" />
        <img src="${iconTwitter}" class="footer_icon" alt="twitter" />
        <img src="${iconInst}" class="footer_icon" alt="instagramm" />
        <img src="${iconYT}" class="footer_icon" alt="youtube" />
      </div>
    </div>

    <!-- Правый блок (Ссылки) -->
    <div class="footer__block-right">
      <div class="block-right__column">
        <h2>About</h2>
        <ul class="footer__list">
          <li><a href="#">Menu</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
      <div class="block-right__column">
        <h2>Company</h2>
        <ul class="footer__list">
          <li><a href="#">How we work</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
      <div class="block-right__column">
        <h2>Contact Us</h2>
        <ul class="footer__list">
          <li><a href="#">Address</a></li>
          <li><a href="#">+1 345 345 34</a></li>
          <li><a href="#">news@coffee.com</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

   
  `;

const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
console.log(mobileMenu);
const main = document.querySelector('.hero__content');

//Логика БУРГЕР
burgerBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  mobileMenu.classList.toggle('d-none');
  main.style.marginTop = '350px';
});

//Закрыть бургер вне окна
document.addEventListener('click', (event) => {
  const isClickInside = mobileMenu.contains(event.target) || burgerBtn.contains(event.target);

  if (!isClickInside) {
    mobileMenu.classList.add('d-none');
    main.style.marginTop = '0px';
  }
});

//Анимация наведения на карточки
const cardItem = document.querySelectorAll('.card-item');
console.log(cardItem);
cardItem.forEach((e) => {
  e.addEventListener('mouseenter', () => {
    e.style.transform = 'translateY(-5px)';
    e.style.boxShadow = '0 12px 20px rgba(0,0,0,0.2)';
    e.style.transition = 'all 0.3s ease';
  });
  e.addEventListener('mouseleave', () => {
    e.style.transform = 'translateY(0px)';
    e.style.boxShadow = 'none';
  });
});

// Переключение отзывов логика

class FeedbackSlider {
  constructor() {
    this.blocks = document.querySelectorAll('.feedback__block');
    this.btnLeft = document.querySelector('.feedback__btn-left');
    this.btnRight = document.querySelector('.feedback__btn-rigth');
    this.currentIndex = 0;
    this.totalBlocks = this.blocks.length;

    this.init();
  }

  init() {
    this.showBlock(0); // Показать первый отзыв
    this.btnRight.addEventListener('click', () => this.next());
    this.btnLeft.addEventListener('click', () => this.prev());
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        this.next(); // Стрелка вправо
      } else if (event.key === 'ArrowLeft') {
        this.prev(); // Стрелка влево
      }
    });
    // Автопрокрутка каждые 5 секунд (опционально)
    this.autoSlide();
  }

  showBlock(index) {
    // Убираем active у всех
    this.blocks.forEach((block) => block.classList.remove('feedback__block--active'));

    // Добавляем active нужному
    this.blocks[index].classList.add('feedback__block--active');

    this.currentIndex = index;
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % this.totalBlocks;
    this.showBlock(nextIndex);
  }

  prev() {
    const prevIndex = this.currentIndex === 0 ? this.totalBlocks - 1 : this.currentIndex - 1;
    this.showBlock(prevIndex);
  }

  autoSlide() {
    setInterval(() => {
      this.next();
    }, 100000);
  }
}

// Запуск слайдера после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  new FeedbackSlider();
});
