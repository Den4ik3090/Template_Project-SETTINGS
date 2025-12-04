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
