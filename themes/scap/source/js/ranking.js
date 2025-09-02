document.addEventListener('DOMContentLoaded', () => {
    const attractions = document.querySelectorAll('.attraction');
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: observer.unobserve(entry.target); // Uncomment if you want one-time animation
            }
        });
    }, observerOptions);

    attractions.forEach(attraction => {
        observer.observe(attraction);
    });
});