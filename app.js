const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.navmenu');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('acitve');
    navMenu.classList.toggle('acitve');
})