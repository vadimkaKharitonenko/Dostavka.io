const navigationLinks = document.querySelectorAll('.js-navigation-link');

function smoothScrollToAnchor( e ) {
  e.preventDefault();
  const target = document.querySelector('.' + e.target.getAttribute('data-target'));
  
  target.scrollIntoView({ behavior: 'smooth' });
}

if ( navigationLinks ) Array.from( navigationLinks )
  .map( link => link.onclick = e => smoothScrollToAnchor( e ) );
