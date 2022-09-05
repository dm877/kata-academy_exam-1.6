const feedbackModal = document.querySelector('.feedback-modal');
const feedbackButtons = document.querySelectorAll('.accent-button--chat');
const closeFeedbackButtons = feedbackModal.querySelectorAll('.accent-button--close');

const mainBlocker = document.querySelector('.main-blocker');

for(let i = 0;i<feedbackButtons.length ;i++) {
    feedbackButtons[i].addEventListener('click', function () {
        feedbackModal.classList.add('feedback-modal--open');
        mainBlocker.classList.add('main-blocker--display');
    });
}

for(let i = 0;i<closeFeedbackButtons.length ;i++) {
    closeFeedbackButtons[i].addEventListener('click', function () {
        feedbackModal.classList.remove('feedback-modal--open');
        mainBlocker.classList.remove('main-blocker--display');
    });
}