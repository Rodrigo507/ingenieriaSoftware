document.addEventListener('DOMContentLoaded', function (e) {
  var container = document.querySelector('#enunciado');
  var parrafo =
    'El Sol es una estrella* aunque como puedes comprobar* parece bastante más grande que las demás* Esto es porque el Sol está mucho más cerca de la Tierra y por eso a nosotros nos parece que su tamaño es mayor*  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto* Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500* cuando un impresor (N. del T* persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen* No sólo sobrevivió 500 años* sino que tambien ingresó como texto de relleno en documentos electrónicos* quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset"* las cuales contenian pasajes de Lorem Ipsum* y más recientemente con software de autoedición* como por ejemplo Aldus  PageMaker* el cual incluye versiones de Lorem Ipsum*   ';

  var campo = 0;
  // console.log(parrafo.length);
  let fragment = '';
  for (var i = 0; i < parrafo.length; i++) {
    if (parrafo[i] === '*') {
      fragment += `
        <input id="${campo}" type="text" size="1" maxlength="1">
        `;
      campo++;
    } else {
      fragment += `${parrafo[i]}`;
    }
  }
  container.innerHTML = fragment;
});
