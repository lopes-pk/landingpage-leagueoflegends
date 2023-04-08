const textoAnimado = document.querySelectorAll('#texto-sobre');

window.addEventListener('scroll', function(){
  console.log(window.scrollY)
  if(window.scrollY > 100){
    textoAnimado[0].classList.add("animate__animated", "animate__zoomIn");
    
  }
  if(window.scrollY > 500){
    textoAnimado[1].classList.add("animate__animated", "animate__zoomIn");
    
  }
  // console.log(textoAnimado.classList)
})