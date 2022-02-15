import clickMenuItemHandler from './modules/clickMenuItemHandler.js';
import { burgerClickHandler } from './modules/burgerClickHandler.js';
import { imgShowClickHandler } from './modules/imgShowClickHandler.js';

import formSubmit from './modules/formSubmit.js';
//present-img
const handlersElements = [
  {
    event: 'click',
    selectors: ['#present-img'],
    handler: imgShowClickHandler,
  },
  {
    event: 'click',
    selectors: ['#burger-btn'],
    handler: burgerClickHandler,
  },
  {
    event: 'click',
    selectors: [
      '.list__item--navigation',
      '.footer__text--menu-item',
      '.button--demonstration',
    ],
    handler: clickMenuItemHandler,
  },
  {
    event: 'click',
    selectors: ['.form__submit-btn'],
    handler: formSubmit,
  },
  {
    event: 'click',
    selectors: ['#mail-open'],
    handler: e => (window.location = e.target.dataset.href),
  },
];

//button--demonstration

const initHandlers = () => {
  handlersElements.forEach(handlerEL => {
    let domElements = handlerEL.selectors
      .map(selector => [...document.querySelectorAll(selector)])
      .flat();
    domElements.forEach(element =>
      element.addEventListener(handlerEL.event, handlerEL.handler)
    );
  });
};

initHandlers();
