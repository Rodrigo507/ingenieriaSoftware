document.addEventListener('DOMContentLoaded', function (e) {
  var enunciado = document.querySelector('#enunciado');
  const container = document.querySelector('.enunciado');
  const cantActividad = document.querySelector('.cantPregunta');
  const btnterm = document.querySelector('.btn-term');
  const modalResult = document.querySelector('.modal-body');
  // const modalVideo = document.querySelector('#myModal');
  var correctas = 0;

  var parrafos = [
    'El en prado se estaba muy a gusto* tanto que los animalitos no se querían ir* De pronto comenzaron a venir las nubes* eso lo cambiaba todo*',
    'Me gusta merendar galletas, leche* zumo, pan y mantequilla* Aunque mi madre siempre dice que es mejor merendar plátano, naranja* aguacate y pan integra.',
    'He buscado todas las opciones posibles* sin embargo, todavía no he dado con la correcta*',
    'Lista de deberes* leer el cuento, hacer las sumas y las restas y terminar el dictado.',
    'Propósitos para esta semana* jugar a la pelota con mamá, hacer un bizcocho con papá y ver los dibujos con Lola.',
  ];
  var respuestaCorrecta = [[',', '.', ',', '.'], [',', '.', ','], [';', '.'], [':'], [':']];
  var cantidadParrafos = parrafos.length;
  var campo = 1;
  var idParrafo = 1;

  //Cargar campo por defecto
  cracionDeCampos(0);
  cambioCantidadTexto(0);

  //Cargar modal de video
  $('#myModal').modal('show');
  // modalVideo.modal

  // Cambio de parrafo
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-next')) {
      evaluacion(idParrafo - 1);
      if (idParrafo < cantidadParrafos) {
        cambioCantidadTexto(idParrafo);
        cracionDeCampos(idParrafo);
        idParrafo++;
        if (idParrafo === cantidadParrafos) {
          hiddenBtnNext(e);
          btnterm.removeAttribute('hidden');
        }
      }
    }
    if (e.target.classList.contains('btn-term')) {
      evaluacion(idParrafo - 1);
      hiddenBtnNext(e);
      modalResult.innerHTML = `Total de puntos optenidos: ${correctas}`;
    }
  });

  function cracionDeCampos(iParrafo) {
    let fragment = '';
    for (var i = 0; i < parrafos[iParrafo].length; i++) {
      if (parrafos[iParrafo][i] === '*') {
        fragment += `
        <input id="${campo}" type="text" size="1" maxlength="1">
        `;
        campo++;
      } else {
        fragment += `${parrafos[iParrafo][i]}`;
      }
    }
    campo = 1;
    enunciado.innerHTML = fragment;
  }
  //Cambia la cantidad de enunciado faltantes
  function cambioCantidadTexto(cant) {
    cantActividad.innerHTML = `${cant + 1}/${cantidadParrafos}`;
  }
  //Ocultar boton next
  function hiddenBtnNext(e) {
    e.target.style.visibility = 'hidden';
  }

  function evaluacion(indice) {
    var procentaje = 0;
    var inputs = document.querySelectorAll('input');
    var audioCorrecto = new Audio('../audio/ecorrecto.mp3');
    var audioIncorrecto = new Audio('../audio/eincorrecto.mp3');
    for (var x = 0; x < inputs.length; x++) {
      if (respuestaCorrecta[indice][x] === inputs[x].value) {
        correctas++;
        procentaje++;
      }
    }
    if (procentaje >= 3) {
      audioCorrecto.play();
    } else {
      audioIncorrecto.play();
    }
  }
});
