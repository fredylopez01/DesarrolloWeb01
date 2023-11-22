var btnToggle = document.querySelector('.toggle-button');

btnToggle.addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('active');
})