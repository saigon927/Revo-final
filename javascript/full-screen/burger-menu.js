const btn = document.querySelector(".full-screen__burger");
const menu = document.querySelector(".full-screen__burger-menu");

btn.addEventListener("click", menuOpen);

function menuOpen() {
	document.body.classList.toggle("fixed");
	this.classList.toggle("open");
	menu.classList.toggle("open");
}