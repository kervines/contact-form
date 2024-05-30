// Inputs
const inputFName = document.querySelector('.fname');
const inputLName = document.querySelector('.lname');
const inputEmail = document.querySelector('.email');
const inputRadio1 = document.querySelector('.query1');
const inputRadio2 = document.querySelector('.query2');
const inputTextArea = document.querySelector('.msg');
const inputCheckBox = document.querySelector('.checkbox');

// Mensagem de erro
const msgRequired = document.querySelectorAll('.msg-required');

const validationEmail = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = inputEmail.value;
  return regex.test(email);
};

const validation = () => {
  msgRequired.forEach((msg) => {
    if (inputFName.value === '') {
      if (msg.dataset.info === inputFName.className) {
        msg.classList.remove('display-none');
        inputFName.classList.add('bd-red');
        setTimeout(() => {
          msg.classList.add('display-none');
          inputFName.classList.remove('bd-red');
        }, 2000);
      }
    }

    if (inputLName.value === '') {
      if (msg.dataset.info === inputLName.className) {
        msg.classList.remove('display-none');
        inputLName.classList.add('bd-red');
        setTimeout(() => {
          msg.classList.add('display-none');
          inputLName.classList.remove('bd-red');
        }, 2000);
      }
    }

    if (inputEmail.value === '' || !validationEmail()) {
      if (msg.dataset.info === inputEmail.className) {
        msg.classList.remove('display-none');
        inputEmail.classList.add('bd-red');
        setTimeout(() => {
          msg.classList.add('display-none');
          inputEmail.classList.remove('bd-red');
        }, 2000);
      }
    }
  });
};

// Button
const buttonSubmit = document.querySelector('input[type="button"]');

buttonSubmit.addEventListener('click', validation);
