const successPopupClose = document.querySelector('.js-success-form-close');
const successPopup = document.querySelector('.js-success-form-popup');

function closeSuccessForm( e ) {
  e.preventDefault();
  if ( successPopup ) successPopup.classList.add('hidden');
}

if ( successPopupClose ) successPopupClose.onclick = e => closeSuccessForm( e );