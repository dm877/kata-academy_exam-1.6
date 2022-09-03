const menuBurger =  document.querySelector('.menu-burger');
const sideMenu =  document.querySelector('.side-menu');
const closeButton =  sideMenu.querySelector('.accent-button--close');

menuBurger.addEventListener('click', function () {
    sideMenu.classList.add('side-menu--open');
});

closeButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-menu--open');
});

