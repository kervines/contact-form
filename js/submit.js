export default function initSubmit() {
  const checkInput = document.querySelector('#check');
  const submit = document.querySelector('input[type="button"]');

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
}
