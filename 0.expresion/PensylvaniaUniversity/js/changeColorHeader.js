const colors = ['#ffffff44', '#E50000cc', '#ff8d00cc', '#ffee00cc', '#028121cc', '#004cffcc', '#760088cc'];
let index = 0;

function changeBackgroundColor() {
document.querySelector("header").style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}

setInterval(changeBackgroundColor, 2000);