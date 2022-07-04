const offer = document.getElementById('offer');

new IntersectionObserver(
    function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.disconnect();
                offer.classList.add('show');
            }
        });
    },
    { rootMargin: '-60px' }
).observe(offer);
