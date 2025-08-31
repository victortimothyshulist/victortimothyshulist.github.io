
document.addEventListener('DOMContentLoaded', () => {
  // Save active nav in localStorage as a tiny enhancement
  const links = document.querySelectorAll('.nav-link');
  links.forEach(a => a.addEventListener('click', () => localStorage.setItem('active', a.textContent.trim())));
  const saved = localStorage.getItem('active');
  if (saved) {
    links.forEach(a => a.classList.toggle('active', a.textContent.trim() === saved));
  }
});
