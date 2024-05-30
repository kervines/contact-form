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

// Button
const buttonSubmit = document.querySelector('.submit');

const validationInputs = () => {};

buttonSubmit.addEventListener('click', validationInputs);
