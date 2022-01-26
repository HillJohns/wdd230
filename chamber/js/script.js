const lastmod = document.querySelector('#lastmod');
lastmod.textContent = document.lastModified;

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
