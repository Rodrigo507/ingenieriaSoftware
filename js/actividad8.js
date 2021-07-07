document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const imagen = document.getElementById('imagen');
  const silaba = document.querySelector('.silaba');
  let cont = 1; //Indice de imagen
  let cantImagen = 6; //Cantidad total de imagen a mostrar
  let fraces = [
    ['Pe', 'rro'],
    ['Del', 'fin'],
    ['nos', 'u'],
    ['a', 'ho', 'ra'],
    ['ne', 'car'],
    ['ce', 'rra', 'du', 'ras'],
  ];

  container.addEventListener('click', (e) => {
    //Accion del boton next
    if (e.target.classList.contains('btn-next')) {
      //   Ocultamos el boton
      if (cont === cantImagen) {
        hiddenBtnNext(e);
      }
      if (cont <= cantImagen) {
        //Eliminar elementos del div/silabas
        silaba.innerHTML = '';

        //Cambio de imagen
        cambioImagen(cont);

        //Agregrar las cilabas
        fraces[cont - 1].forEach((element) => {
          let parrafo = document.createElement('p');
          parrafo.textContent = element;
          silaba.appendChild(parrafo);
          //   console.log(element);
        });
        cont++;
      }
    }
  });
});

//Funcion de cambiar imagen
function cambioImagen(cont) {
  imagen.src = `../img/act8/img${cont}.jpg`;
}
//Ocultar boton next
function hiddenBtnNext(e) {
  e.target.style.visibility = 'hidden';
}

function aliminarHijos() {
  var padre = document.querySelector('.silaba');
  for (var i = 0; i < padre.children.length; i++) {
    var hijo = padre.children[i];
    padre.remove(hijo);
  }
}
