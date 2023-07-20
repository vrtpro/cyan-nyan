const serviceParent = document.getElementById('services');

const serviceIO = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                serviceIO.unobserve(entry.target);
            }
        });
    },
    { rootMargin: '-60px' },
);

[...serviceParent.children].forEach((child) => {
    serviceIO.observe(child);
});
