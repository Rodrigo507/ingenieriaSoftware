document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const audio = document.getElementById('audio');

  let cont = 2; //Indice de audio
  let cantAudio = 2; //Cantidad total de audio a rproducir dinamicamente

  container.addEventListener('click', (e) => {
    //Accion del boton next
    if (e.target.classList.contains('btn-next')) {
      //   Ocultamos el boton
      if (cont <= cantAudio) {
        cambioAudio(cont);
        if (cont === cantAudio) {
          hiddenBtnNext(e);
        }
        cont++;
      }
    }
  });
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
