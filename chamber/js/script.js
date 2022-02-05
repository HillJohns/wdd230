const datefieldUK = document.querySelector("date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(
  now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

function toggleMenu() {
  document.getElementById("navButton").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("open");
}
const x = document.getElementById('hamburger')
x.onclick = toggleMenu;

const lastmod = document.querySelector('#lastmod');
lastmod.textContent = document.lastModified;

