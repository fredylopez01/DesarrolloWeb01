var btnToggle = document.getElementById("search");
var btnClose = document.getElementById("close");

btnToggle.addEventListener('click', function(){
    document.querySelector('.search').classList.toggle('openSearch');
})
btnClose.addEventListener('click', function(){
    document.querySelector('.search').classList.toggle('openSearch');
})