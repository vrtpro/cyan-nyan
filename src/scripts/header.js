const header = document.getElementById('header');
const headerMenu = document.getElementById('header-menu');
const headerNav = document.getElementById('header-nav');

headerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('active');
});
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('slim');
    } else {
        header.classList.remove('slim');
    }
});
