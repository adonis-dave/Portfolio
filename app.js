function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');

    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        setTimeout(() => sidebar.style.display = "none", 400); // Wait for animation before hiding
    } else {
        sidebar.style.display = "block"; // Ensure it's present before animation starts
        setTimeout(() => sidebar.classList.add('active'), 10);
    }
}