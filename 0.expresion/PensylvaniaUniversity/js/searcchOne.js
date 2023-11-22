var btnToggle = document.getElementById("searchOne");
var btnClose = document.getElementById("closeSearch");

btnToggle.addEventListener('click', function(){
    document.querySelector('.fullscreen-container').classList.toggle('visibleSearch');
})
btnClose.addEventListener('click', function(){
    document.querySelector('.fullscreen-container').classList.toggle('visibleSearch');
})