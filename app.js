function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');

  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
    requestAnimationFrame(() => {
      sidebar.style.display = "none"; // Wait for animation before hiding
    });
  } else {
    sidebar.style.display = "block"; // Ensure it's present before animation starts
    requestAnimationFrame(() => {
      sidebar.classList.add('active');
    });
  }
}