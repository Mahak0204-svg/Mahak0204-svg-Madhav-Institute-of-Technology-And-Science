document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const programCards = document.querySelectorAll('.program-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const duration = this.getAttribute('data-duration');

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            programCards.forEach(card => {
                if (duration === 'all' || card.getAttribute('data-duration') === duration) {
                    card.style.display = 'block'; // Or 'grid-item' if using CSS Grid
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Initially show all courses
    const allButton = document.querySelector('.filter-buttons button[data-duration="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
});