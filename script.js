
function typewriter(elemento) {
  const textoArray = elemento.innerText.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra,i)=> {
    setTimeout(function() {
        elemento.innerHTML+= letra;
    }, 75 * i)
  });
 
}


const titulo = document.querySelector('h1');
typewriter(titulo);

