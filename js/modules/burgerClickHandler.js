const burgerBtn = document.querySelector('#burger-btn');
const navigation = document.querySelector('#header-navigation');
const body = document.querySelector('body');
let menuIsOpen = false;
const toggler = () => {
  menuIsOpen = !menuIsOpen;
  burgerBtn.classList.toggle('header__burger-btn--active');
  navigation.classList.toggle('header__navigation--active');
  body.style.overflow === 'hidden'
    ? (body.style.overflow = 'visible')
    : (body.style.overflow = 'hidden');
};
const burgerClickHandler = e => {
  e.stopPropagation();
  toggler();
};

export { burgerClickHandler, toggler, menuIsOpen };
