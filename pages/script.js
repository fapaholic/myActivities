const titles = document.querySelectorAll('.title');
const detailsElements = document.querySelectorAll('.details'); // Renamed variable to avoid confusion

detailsElements.forEach(detail => {
    detail.style.display = "none"; // Set initial display to none for each details element
});

titles.forEach(title => {
    title.addEventListener('mouseenter', () => {
        title.nextElementSibling.style.display = 'block';
    });

    title.addEventListener('mouseleave', () => {
        title.nextElementSibling.style.display = 'none';
    });
});
