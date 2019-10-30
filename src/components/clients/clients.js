const clients = document.querySelectorAll('.js-client');

function onToggleClient( e ) {
  if ( e.target.classList.contains('.client') ) 
    return e.target.classList.toggle('is-expanded');
  
  return e.target.closest('.client').classList.toggle('is-expanded');
}

if ( clients ) Array.from( clients ).map( client => {
  client.onclick = e => onToggleClient( e );
});