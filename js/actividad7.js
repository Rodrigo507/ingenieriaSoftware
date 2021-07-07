document.addEventListener('DOMContentLoaded', function (e) {
  var enunciado = document.querySelector('#enunciado');
  const container = document.querySelector('.enunciado');
  var parrafo =
    'El Sol es una estrella* aunque como puedes comprobar* parece bastante más grande que las demás* Esto es porque el Sol está mucho más cerca de la Tierra y por eso a nosotros nos parece que su tamaño es mayor*  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto* Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500* cuando un impresor (N. del T* persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen* No sólo sobrevivió 500 años* sino que tambien ingresó como texto de relleno en documentos electrónicos* quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset"* las cuales contenian pasajes de Lorem Ipsum* y más recientemente con software de autoedición* como por ejemplo Aldus  PageMaker* el cual incluye versiones de Lorem Ipsum*   ';
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

  // Cambio de parrafo
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-next')) {
      if (idParrafo < parrafos.length) {
        cracionDeCampos(idParrafo);
        idParrafo++;
        if (idParrafo === parrafos.length) {
          hiddenBtnNext(e);
        }
      }
    }
  });

  console.log(parrafos.length);
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
});

//Ocultar boton next
function hiddenBtnNext(e) {
  e.target.style.visibility = 'hidden';
}
