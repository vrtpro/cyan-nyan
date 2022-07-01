const typingText = document.getElementById('typing-text');

typingText.addEventListener('animationend', () => {
    typingText.append(typingText.firstElementChild);
});
