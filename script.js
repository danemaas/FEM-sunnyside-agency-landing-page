const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}