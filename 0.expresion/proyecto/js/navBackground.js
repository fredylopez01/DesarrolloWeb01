var nav = document.querySelector('.nav');

window.addEventListener("scroll", function () {
var scroll = window.pageYOffset;

if (scroll > 50) {
  nav.classList.add("background");
} else if (scroll <= 50) {
  nav.classList.remove("background");
}
});