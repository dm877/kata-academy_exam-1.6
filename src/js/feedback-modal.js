const feedbackModal = document.querySelector('.feedback-modal');
const feedbackButtons = document.querySelectorAll('.accent-button--chat');
const closeButton = feedbackModal.querySelector('.accent-button--close');

for(let i = 0;i<feedbackButtons.length ;i++) {
    feedbackButtons[i].addEventListener('click', function () {
        feedbackModal.classList.add('feedback-modal--open');
    });
}

closeButton.addEventListener('click', function () {
    feedbackModal.classList.remove('feedback-modal--open');
});