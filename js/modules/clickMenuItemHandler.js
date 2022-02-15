import { toggler, menuIsOpen } from './burgerClickHandler.js';

const clickMenuItemHandler = e => {
  let blockId = e.target.dataset.block;
  let target = document.querySelector(blockId);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    if (screen.width <= 900 && menuIsOpen) {
      toggler();
    }
  }
};

export default clickMenuItemHandler;
