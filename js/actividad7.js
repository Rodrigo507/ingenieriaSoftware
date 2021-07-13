document.addEventListener('DOMContentLoaded', function (e) {
  var enunciado = document.querySelector('#enunciado');
  const container = document.querySelector('.enunciado');
  const cantActividad = document.querySelector('.cantPregunta');
  var parrafos = [
    'Había una vez un niño al que siempre le gustaba correr* tanto era así que hasta dentro de la clase lo hacía* un día* la profesora le dijo que como no se estuviera quieto le iba a tener que quitar la silla* ',
    'He buscado todas las opciones posibles* sin embargo* todavía no he dado con la correcta* ',
    'Lista para la compra* leche* café y pastas',
    'El en prado se estaba muy a gusto* tanto que los animalitos no se querían ir* De pronto comenzaron a venir las nubes* eso lo cambiaba todo.',
  ];
  var campo = 1;
  var idParrafo = 1;

  //Cargar campo por defecto
  cracionDeCampos(0);
  cambioCantidadTexto(0);

  // Cambio de parrafo
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-next')) {
      if (idParrafo < parrafos.length) {
        cambioCantidadTexto(idParrafo);
        cracionDeCampos(idParrafo);
        idParrafo++;
        if (idParrafo === parrafos.length) {
          hiddenBtnNext(e);
        }
      }
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
    cantActividad.innerHTML = `${cant + 1}/${parrafos.length}`;
  }
});

//Ocultar boton next
function hiddenBtnNext(e) {
  e.target.style.visibility = 'hidden';
}
