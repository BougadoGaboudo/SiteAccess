/* Menu déroulant */

let menu = document.querySelector('#menu');
        menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    let visible = document.querySelector('.visible');
    let button = document.querySelector('button');
    let expanded = button.getAttribute('aria-expanded') === 'true' || false;
  
    visible.classList.toggle('open');
    button.setAttribute('aria-expanded', !expanded);
  }