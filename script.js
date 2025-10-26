// Atualiza o ano no footer automaticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Menu toggle mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
