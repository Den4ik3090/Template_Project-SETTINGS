export function setupMainBlock() {
  console.log('COMPLETE!');
}
const block = document.querySelector('.main__block-two');
block.addEventListener('mouseover', () => {
  block.style.backgroundColor = 'red';
});

document.addEventListener('mouseover', (event) => {
  if (!event.target.classList.contains('main__block-two')) {
    block.style.backgroundColor = '';
  }
});
