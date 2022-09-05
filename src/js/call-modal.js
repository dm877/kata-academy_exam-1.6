const callModal = document.querySelector('.call-modal');
const callButtons = document.querySelectorAll('.accent-button--call');
const closeButton = callModal.querySelector('.accent-button--close');

const mainBlocker = document.querySelector('.main-blocker');

for(let i = 0;i<callButtons.length ;i++) {
    callButtons[i].addEventListener('click', function () {
        callModal.classList.add('call-modal--open');
        mainBlocker.classList.add('main-blocker--display');
    });
}

closeButton.addEventListener('click', function () {
    callModal.classList.remove('call-modal--open');
    mainBlocker.classList.remove('main-blocker--display');
});