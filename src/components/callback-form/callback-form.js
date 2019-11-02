const agreementCheckbox = document.querySelector('.js-agreement-checkbox');
const openCallbackBtns = document.querySelectorAll('.js-open-callback-form');
const callbackPopup = document.querySelector('.js-callback-form-popup');
const callbackPopupClose = document.querySelector('.js-callback-form-close');
const callbackForm = document.querySelector('.js-callback-form');

function openCallbackForm( e ) {
  e.preventDefault();
  if ( callbackPopup ) callbackPopup.classList.remove('hidden');
}

function closeCallbackForm( e ) {
  e.preventDefault();
  if ( callbackPopup ) callbackPopup.classList.add('hidden');
}

function openSuccess( e ) {
  e.preventDefault();

  if ( callbackPopup ) callbackPopup.classList.add('hidden');
  if ( document.querySelector('.js-success-form-popup') ) 
    document.querySelector('.js-success-form-popup').classList.remove('hidden');
}

if ( agreementCheckbox ) agreementCheckbox.onclick = () => 
  agreementCheckbox.classList.toggle('is-checked');

if ( openCallbackBtns ) Array.from( openCallbackBtns )
  .map( btn => btn.onclick = e => openCallbackForm( e ) );

if ( callbackPopupClose ) callbackPopupClose.onclick = e => closeCallbackForm( e );

if ( callbackForm ) callbackForm.onsubmit = e => openSuccess( e );