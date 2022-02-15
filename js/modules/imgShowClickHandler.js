const body = document.querySelector('body');

const closeModal = e => {
  let modal = document.querySelector('#modal');
  modal.classList.remove('modal--show');
  setTimeout(() => modal.remove(), 500);
};

const modalDom = {
  type: 'div',
  classes: ['modal'],
  attrs: [
    {
      name: 'id',
      value: 'modal',
    },
  ],
  children: [
    {
      type: 'div',
      classes: ['modal__content'],
      children: [
        {
          type: 'button',
          text: '+',
          classes: ['modal__close-btn'],
          events: [
            {
              type: 'click',
              handler: closeModal,
            },
          ],
        },
        {
          type: 'img',
          classes: ['content__img'],
          attrs: [
            { name: 'src', value: './images/present.svg' },
            { name: 'alt', value: 'present' },
          ],
        },
      ],
    },
  ],
};

const treeCreator = (obj, node = null) => {
  let element = document.createElement(obj['type']);
  if (obj['classes']) obj['classes'].forEach(c => element.classList.add(c));
  if (obj['attrs']) obj['attrs'].forEach(attr => setAttributes(element, attr));
  if (obj['text']) element.textContent = obj['text'];
  if (obj['events']) setListeners(element, obj['events']);
  if (!node) node = element;
  else node.appendChild(element);
  if (obj['children']) {
    obj['children'].forEach(children => treeCreator(children, element));
  }
  return node;
};
const setListeners = (element, events) =>
  events.forEach(event => {
    element.addEventListener(event.type, event.handler);
  });

const setAttributes = (element, attr) => {
  element.setAttribute(attr.name, attr.value);
};

export const imgShowClickHandler = e => {
  let modal = treeCreator(modalDom);
  body.prepend(modal);
  setTimeout(() => modal.classList.add('modal--show'), 100);
};
