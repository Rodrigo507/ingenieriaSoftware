document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const audio = document.getElementById('audio');
  const cantActividad = document.querySelector('.cantPregunta');
  const btnterm = document.querySelector('.btn-term');
  const modalResult = document.getElementById('modal-body');
  let cont = 2; //Indice de audio
  let cantAudio = 2; //Cantidad total de audio a rproducir dinamicamente
  var conrrectasCont = 0;
  const respuestaCorrecta = [
    'Mañana tenemos el campamento',
    'Me compre una nueva bicicleta',
    'Damian se corto el pelo',
    'Manuel apago la computadora',
  ];

  $('#myModal').modal('show');
  container.addEventListener('click', (e) => {
    //Accion del boton terminar

    if (e.target.classList.contains('btn-term')) {
      let contenido = '';
      evaluacion();

      contenido += `Total de puntos obtenidos: ${conrrectasCont} <br><br> <p>Respuestas correctas</p>`;
      respuestaCorrecta.forEach((element) => {
        contenido += `<li>${element}</li> ` + '<br>';
      });

      modalResult.innerHTML = contenido;
    }
  });

  function evaluacion() {
    var procentaje = 0;
    var inputs = document.querySelectorAll('input');
    var audioCorrecto = new Audio('../audio/correcto.mp3');
    var audioIncorrecto = new Audio('../audio/incorrecto.mp3');

    for (var x = 0; x < inputs.length; x++) {
      if (respuestaCorrecta[x].toLowerCase() === inputs[x].value.toLowerCase()) {
        conrrectasCont++;
      }
    }
    if (conrrectasCont >= 3) {
      audioCorrecto.play();
    } else {
      audioIncorrecto.play();
    }
  }
});
