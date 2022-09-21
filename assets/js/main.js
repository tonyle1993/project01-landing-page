const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.js-modal');
const modalContainer = $('.js-modal-container');
const modalCloseBtn = $('.js-close-btn');
const buyBtns = $$('.js-buy-btn');

const menu = $('.js-menu');
const menuBtn = $('.js-menu-btn');
const menuHeight = menu.clientHeight;
const menuItems = $$('.js-menu li a[href*="#"]');

//modal
function openModal() {
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', openModal)
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', closeModal);

modalContainer.addEventListener('click', (event) => {
  event.stopPropagation();
});

//menu mobile
function closeMenu() {
  menu.style.height = `${menuHeight}px`;
}

menuBtn.addEventListener('click', () => {
  if(menu.clientHeight === menuHeight) {
    menu.style.height = 'auto';
  } 
  else {
    menu.style.height = `${menuHeight}px`;
  }
});

for (const menuItem of menuItems) {
  const subMenu = menuItem.parentElement.querySelector('.subnav');
  if(!subMenu)
  {
    menuItem.addEventListener('click', closeMenu);
  }
  else {
    menuItem.addEventListener('click', (event) => {
      event.preventDefault();
    });
  }
}