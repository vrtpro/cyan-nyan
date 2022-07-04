const loading = document.getElementById('loading');
window.addEventListener('load', () => {
    loading.addEventListener('transitionend', () => {
        loading.remove();
    });
    loading.classList.add('hide');
});
