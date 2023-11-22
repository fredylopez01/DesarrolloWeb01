var header = document.querySelector("header");
var logo = document.getElementById("logo");

window.addEventListener("scroll", function () {
var scroll = window.pageYOffset;

if (scroll < 60) {
  header.classList.toggle("sticky");
  logo.src = "img/logoAzul.png";
} else if (scroll >= 60) {
  header.classList.toggle("sticky");
  logo.src = "https://www.upenn.edu/themes/custom/penn_starter/assets/img/UPenn-logo.svg";
}
});