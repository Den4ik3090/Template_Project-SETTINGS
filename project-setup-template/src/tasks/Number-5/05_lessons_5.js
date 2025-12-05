const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
console.log(mobileMenu);
const main = document.querySelector('.hero__content');
console.log(main);

burgerBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  mobileMenu.classList.toggle('d-none');
  main.style.marginTop = '350px';
});

document.addEventListener('click', (event) => {
  const isClickInside = mobileMenu.contains(event.target) || burgerBtn.contains(event.target);

  if (!isClickInside) {
    mobileMenu.classList.add('d-none');
    main.style.marginTop = '0px';
  }
});

//
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
