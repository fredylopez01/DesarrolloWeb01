function ejecuta(){
	//document.getElementsByTagName("p")[2].onclick=saludo;
	//document.getElementById("second").onclick=saludo;
	for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
		document.getElementsByTagName("p")[i].onclick=saludo;
	}
}

function selector(){
	document.querySelector("p").onclick=saludo;
}

function variosSelector(){
	var elemento= document.querySelectorAll("p", "span")[0].onclick=saludo;
}

function saludo(){
	alert("Este se ejcuta desde un archivo independiente");
}

window:onload=variosSelector;