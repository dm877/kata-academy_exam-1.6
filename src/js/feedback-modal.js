const feedbackModal = document.querySelector('.feedback-modal');
const feedbackButtons = document.querySelectorAll('.accent-button--chat');
const closeButton = feedbackModal.querySelector('.accent-button--close');

const mainBlocker = document.querySelector('.main-blocker');

for(let i = 0;i<feedbackButtons.length ;i++) {
    feedbackButtons[i].addEventListener('click', function () {
        feedbackModal.classList.add('feedback-modal--open');
        mainBlocker.classList.add('main-blocker--display');
    });
}

closeButton.addEventListener('click', function () {
    feedbackModal.classList.remove('feedback-modal--open');
    mainBlocker.classList.remove('main-blocker--display');
});