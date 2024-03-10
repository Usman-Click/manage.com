const hamburger = document.querySelector('#icon-hamburger');
const hamburgerMenu = document.querySelector('#menu-hamburger');

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('open')
    hamburgerMenu.classList.toggle('flex')
    hamburgerMenu.classList.toggle('hidden')
})


