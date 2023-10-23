var misong, play, barra, progreso, max;

max = 250;
let bucle;

function start(){
    misong = document.getElementById("misong");
    play = document.getElementById("play");
    barra = document.getElementById("barra"),
    progreso = document.getElementById("progreso");
    
    play.addEventListener("click", clicando, false);
    bucle = setInterval(estado, 30);
}

function clicando(){
    if((misong.paused==false && misong.ended==false)){
        misong.pause();
        play.innerHTML="Play";
    } else{
        misong.play();
        play.innerHTML="Pause";
        bucle = setInterval(estado, 30);
    }
       
}

function estado(){
    if(misong.ended==false){
        var total = parseInt(misong.currentTime*max/misong.duration);
        progreso.style.width = total+"px";
    }
}

window.addEventListener("load", start, false);