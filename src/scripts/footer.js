new IntersectionObserver(
    function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.disconnect();
                entry.target.classList.add('show');
            }
        });
    },
    { threshold: 1 }
).observe(document.getElementById('social'));
