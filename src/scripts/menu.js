const toggle = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');

function setOpen(open) {
  nav.classList.toggle('expanded', open);
  toggle.setAttribute('aria-expanded', String(open));
}

toggle.addEventListener('click', () => setOpen(!nav.classList.contains('expanded')));

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setOpen(false);
});
