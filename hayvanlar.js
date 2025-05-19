function filterAnimals(category) {
    document.querySelectorAll('.animal-card').forEach(card => {
        card.style.display = category === 'all' || card.dataset.category === category ? 'block' : 'none';
    });
}
