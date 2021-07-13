document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const audio = document.getElementById('audio');
  const cantActividad = document.querySelector('.cantPregunta');
  let cont = 2; //Indice de audio
  let cantAudio = 2; //Cantidad total de audio a rproducir dinamicamente

  cambioCantidadTexto(1);
  container.addEventListener('click', (e) => {
    //Accion del boton next
    if (e.target.classList.contains('btn-next')) {
      //   Ocultamos el boton
      if (cont <= cantAudio) {
        cambioAudio(cont);
        cambioCantidadTexto(cont);
        if (cont === cantAudio) {
          hiddenBtnNext(e);
        }
        cont++;
      }
    }
  });
  //Cambia la cantidad de enunciado faltantes
  function cambioCantidadTexto(cant) {
    cantActividad.innerHTML = `${cant}/${cantAudio}`;
  }
});

//Ocultar boton next
function hiddenBtnNext(e) {
  e.target.style.visibility = 'hidden';
}

//Cambio de audio
function cambioAudio(cont) {
  audio.src = `../audio/part${cont}.mp3`;
  console.log(audio.src);
}
