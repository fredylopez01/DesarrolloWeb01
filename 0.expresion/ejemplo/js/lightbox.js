const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerimg(imagen.getAttribute('src'))
    })
})
contenedorLight.addEventListener('click', (e)=>{
    if(e.target === contenedorLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
})

const aparecerimg = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}