const menuBurger =  document.querySelector('.menu-burger');
const sideMenu =  document.querySelector('.side-menu');
const closeButton =  sideMenu.querySelector('.accent-button--close');

const mainBlocker = document.querySelector('.main-blocker');

menuBurger.addEventListener('click', function () {
    sideMenu.classList.add('side-menu--open');
    mainBlocker.classList.add('main-blocker--display');
});

closeButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-menu--open');
    mainBlocker.classList.remove('main-blocker--display');
});

