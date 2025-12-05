var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1, // По умолчанию 1 слайд на экране (мобильные)
  spaceBetween: 20, // Отступ между слайдами
  loop: true, // Бесконечная прокрутка
  grabCursor: true, // Курсор-рука при наведении
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // Настройки адаптивности
    640: {
      slidesPerView: 2, // Планшеты
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3, // Небольшие ноутбуки
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4, // Большие экраны
      spaceBetween: 40,
    },
  },
});
