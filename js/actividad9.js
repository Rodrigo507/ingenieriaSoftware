document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const audio = document.getElementById('audio');
  const cantActividad = document.querySelector('.cantPregunta');
  const btnterm = document.querySelector('.btn-term');
  const modalResult = document.getElementById('modal-body');
  let cont = 2; //Indice de audio
  let cantAudio = 2; //Cantidad total de audio a rproducir dinamicamente
  var conrrectasCont = 0;
  var indiceGeneral = 0;
  const correctas = [
    'Me contaron que hace tiempo durante una calida noche de verano una estrella recien nacida ilumino de tal manera a una luciernaga que volaba en la tranquilidad de la campiña',
    'Que parecía haberla envuelto en una autentico abrazo de luz con voz suave pero profunda',
  ];

  cambioCantidadTexto(1);
  $('#myModal').modal('show');
  container.addEventListener('click', (e) => {
    //Accion del boton next
    if (e.target.classList.contains('btn-next')) {
      evaluacion(indiceGeneral);
      if (indiceGeneral === cantAudio - 2) {
        hiddenBtnNext(e);
        btnterm.removeAttribute('hidden');
      }
      if (indiceGeneral <= cantAudio) {
        cambioAudio(cont);
        cambioCantidadTexto(cont);
      }
      indiceGeneral++;
      cont++;
    }
    if (e.target.classList.contains('btn-term')) {
      let contenido = '';
      evaluacion(indiceGeneral);
      hiddenBtnNext(e);
      contenido += `Total de puntos obtenidos: ${conrrectasCont} <br><br> <p>Respuestas correctas</p>`;
      correctas.forEach((element) => {
        contenido += `<li>${element}</li> ` + '<br>';
      });

      modalResult.innerHTML = contenido;
    }
  });
  //Cambia la cantidad de enunciado faltantes
  function cambioCantidadTexto(cant) {
    cantActividad.innerHTML = `${cant}/${cantAudio}`;
  }
  //Ocultar boton next
  function hiddenBtnNext(e) {
    e.target.style.visibility = 'hidden';
  }

  //Cambio de audio
  function cambioAudio(cont) {
    audio.src = `../audio/part${cont}.mp3`;
  }

  function evaluacion(indice) {
    var inputs = document.querySelector('textarea');
    var audioCorrecto = new Audio('../audio/correcto.mp3');
    var audioIncorrecto = new Audio('../audio/incorrecto.mp3');

    if (correctas[indice].toLowerCase() === inputs.value.toLowerCase()) {
      audioCorrecto.play();
      conrrectasCont++;
    } else {
      audioIncorrecto.play();
    }
    inputs.value = '';
  }
});
