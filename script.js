// Add interactivity (e.g., expand/collapse days)
document.querySelectorAll('.day h2').forEach(header => {
    header.addEventListener('click', () => {
        header.nextElementSibling.classList.toggle('collapsed');
    });
});