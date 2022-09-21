const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.js-modal');
const modalBtn = $('.js-close-btn');
const buyBtns = $$('.js-buy-btn');


for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', () => {
    modal.classList.add('open');
  })
}

modalBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});