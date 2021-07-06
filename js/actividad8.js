document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const imagen = document.getElementById('imagen');
  let cont = 2; //Indice de imagen
  let cantImagen = 7; //Cantidad total de imagen

  imagen.src = `../img/act8/img1.jpg`;

  container.addEventListener('click', (e) => {
    //Accion del boton next
    if (e.target.classList.contains('btn-next')) {
      if (cont <= cantImagen) {
        cambioImagen(cont);
        cont++;
      } else {
        hiddenBtnNext();
        cont = 1;
      }
    }
  });
});

//Funcion de cambiar imagen
function cambioImagen(cont) {
  imagen.src = `../img/act8/img${cont}.jpg`;
}
//Ocultar boton next
function hiddenBtnNext() {
  e.target.style.visibility = 'hidden';
}
