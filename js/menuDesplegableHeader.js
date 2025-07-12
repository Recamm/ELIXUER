const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');
const background = document.getElementById("background-menu");

menuIcon.addEventListener('click', () => {
background.classList.add('active');
sideMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
background.classList.remove('active');
sideMenu.classList.remove('active');
});

// Opcional: cerrar si se toca fuera del menú
window.addEventListener('click', (e) => {
if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    background.classList.remove('active');
    sideMenu.classList.remove('active');
}
});