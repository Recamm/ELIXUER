const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuIcon.addEventListener('click', () => {
sideMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
sideMenu.classList.remove('active');
});

// Opcional: cerrar si se toca fuera del menú
window.addEventListener('click', (e) => {
if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    sideMenu.classList.remove('active');
}
});