const about = document.getElementById('about');

new IntersectionObserver(
    function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.disconnect();
                [...about.firstElementChild.children].forEach((child) => {
                    child.classList.add('show');
                });
            }
        });
    },
    { rootMargin: '-60px' },
).observe(about);
