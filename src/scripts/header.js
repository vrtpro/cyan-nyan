const header = document.getElementById('header');
const headerMenu = document.getElementById('header-menu');
const headerNav = document.getElementById('header-nav');

headerMenu.addEventListener('click', () => {
    if (!headerNav.classList.contains('active')) {
        headerNav.classList.add('open');
    } else {
        headerNav.classList.add('close');
    }
});
headerNav.addEventListener('animationend', () => {
    headerNav.classList.toggle('active');
    headerNav.classList.remove('open');
    headerNav.classList.remove('close');
});

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add('slim');
    } else {
        header.classList.remove('slim');
    }
});
