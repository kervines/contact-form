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

// Modal
const modal = document.querySelector('.modal');
const modalAnimation = () => {
  modal.style.transform = 'translate3d(-50%, 0px, 0)';
  modal.style.opacity = 1;

  setTimeout(() => {
    modal.style.transform = 'translate3d(-50%, -50px, 0)';
    modal.style.opacity = 0;
  }, 2500);
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
        }, 2500);
      }
    }

    if (inputLName.value === '') {
      if (msg.dataset.info === inputLName.className) {
        msg.classList.remove('display-none');
        inputLName.classList.add('bd-red');
        setTimeout(() => {
          msg.classList.add('display-none');
          inputLName.classList.remove('bd-red');
        }, 2500);
      }
    }

    if (inputEmail.value === '' || !validationEmail()) {
      if (msg.dataset.info === inputEmail.className) {
        msg.classList.remove('display-none');
        inputEmail.classList.add('bd-red');
        setTimeout(() => {
          msg.classList.add('display-none');
          inputEmail.classList.remove('bd-red');
        }, 2500);
      }
    }

    if (!inputRadio1.checked && !inputRadio2.checked) {
      if (msg.dataset.info === 'query') {
        msg.classList.remove('display-none');
        setTimeout(() => {
          msg.classList.add('display-none');
        }, 2500);
      }
    }

    if (inputTextArea.value === '') {
      if (msg.dataset.info === inputTextArea.className) {
        msg.classList.remove('display-none');
        inputTextArea.classList.add('bd-red');
        setTimeout(() => {
          msg.classList.add('display-none');
          inputTextArea.classList.remove('bd-red');
        }, 2500);
      }
    }

    if (!inputCheckBox.checked) {
      if (msg.dataset.info === inputCheckBox.className) {
        msg.classList.remove('display-none');
        setTimeout(() => {
          msg.classList.add('display-none');
        }, 2500);
      }
    }

    if (
      inputCheckBox.checked &&
      !!inputTextArea.value &&
      (inputRadio1.checked || inputRadio2.checked) &&
      !!inputEmail.value &&
      validationEmail() &&
      !!inputLName.value &&
      !!inputFName.value
    ) {
      modalAnimation();
    }
  });
};

// Button
const buttonSubmit = document.querySelector('input[type="button"]');

buttonSubmit.addEventListener('click', validation);
