import Validation from './validator.js';

const nameField = document.querySelector('#input-name');
const phoneField = document.querySelector('#input-phone');
const organizationField = document.querySelector('#input-organization');
const mailField = document.querySelector('#input-email');
const formNotify = document.querySelector('#form__notify');

const name = {
  id: '#input-name',
  domElement: nameField,
  type: 'no_empty',
  classError: 'no-valid',
  classDone: 'valid',
  events: ['blur', 'input'],
};
const phone = {
  id: '#input-phone',
  domElement: phoneField,
  type: 'phone',
  classError: 'no-valid',
  classDone: 'valid',
  events: ['blur', 'focus'],
};

const clearForm = () => {
  nameField.value = '';
  nameField.classList.remove('valid', 'no-valid');
  phoneField.value = '';
  phoneField.classList.remove('valid', 'no-valid');
  organizationField.value = '';
  organizationField.classList.remove('valid', 'no-valid');
  mailField.value = '';
  mailField.classList.remove('valid', 'no-valid');
  setTimeout(() => formNotify.classList.remove('form__notify--active'), 2000);
  validation = new Validation([name, phone]);
  validation.on();
};

let validation = new Validation([name, phone]);
validation.on();

const formSubmit = () => {
  let result = validation.getValidStatus();
  let resultCheck = result.check;
  if (resultCheck) {
    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('organization', organizationField.value);
    formData.append('mail', mailField.value);
    formData.append('phone', phoneField.value);
    formNotify.classList.remove('form__notify--error');
    formNotify.textContent = 'Форма отправлена';
    formNotify.classList.add('form__notify--active');

    fetch('https://instudy.online/js/modules/send.php', {
      method: 'POST',
      body: formData,
    }).then(res => {
      console.log(res);
      clearForm();
    });
  } else {
    formNotify.textContent = 'Поля не заполнены';
    formNotify.classList.add('form__notify--error');
  }
};

export default formSubmit;
