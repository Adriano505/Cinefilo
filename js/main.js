document.querySelectorAll('.card-series').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('video').play();
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('video').pause();
    });
});