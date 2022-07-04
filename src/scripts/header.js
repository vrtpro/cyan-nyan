const header = document.getElementById('header');
const headerMenu = document.getElementById('header-menu');
const headerNav = document.getElementById('header-nav');
const main = document.getElementById('main');

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
    if (headerNav.classList.contains('open')) {
        headerNav.classList.add('active');
        headerNav.classList.remove('open');
    }
    if (headerNav.classList.contains('close')) {
        headerNav.classList.remove('active');
        headerNav.classList.remove('close');
    }
});

[...headerNav.getElementsByTagName('a')].forEach(a => {
    a.addEventListener('click', () => {
        headerNav.classList.add('close');
    });
});

new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.remove('slim');
            } else {
                header.classList.add('slim');
            }
        });
    },
    { threshold: 1 }
).observe(main.firstElementChild);

new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.remove('dark');
            } else {
                header.classList.add('dark');
            }
        });
    },
    { rootMargin: '-60px' }
).observe(main.firstElementChild);
