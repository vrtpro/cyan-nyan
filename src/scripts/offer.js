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
    { threshold: 0.8 }
).observe(offer);
