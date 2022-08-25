const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const close = document.getElementById('close');
const hamburger = document.getElementById('hamburger');

btn.addEventListener('click', () => {
 close.style.display = 'block';
 hamburger.style.display = 'none';
 nav.classList.toggle('flex')
 nav.classList.toggle('hidden')
})