const checkInput = document.querySelector('#check');
const submit = document.querySelector('input[type="button"]');

console.log(submit);

function handleClick() {
  if (
    checkInput.getAttributeNames().filter((att) => att === 'checked') ==
    'checked'
  ) {
    alert('Enviou');
  }
}

checkInput.addEventListener('click', () => {
  checkInput.toggleAttribute('checked');
});

submit.addEventListener('click', handleClick);
