document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const imagen = document.getElementById('imagen');
  const silaba = document.querySelector('.silaba');
  const cantActividad = document.querySelector('.cantPregunta');
  const btnterm = document.querySelector('.btn-term');
  const modalResult = document.querySelector('.modal-body');
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
  const correstas = ['Gato', 'Perro', 'Delfin', 'Unos', 'ahora', 'carne', 'cerradura'];

  cambioCantidadTexto(cont);
  $('#myModal').modal('show');
  container.addEventListener('click', (e) => {
    //Accion del boton next
    if (e.target.classList.contains('btn-next')) {
      //   Ocultamos el boton
      if (cont === cantImagen) {
        hiddenBtnNext(e);
        btnterm.removeAttribute('hidden');
      }
      if (cont <= cantImagen) {
        evaluacion(cont - 1);
        //Eliminar elementos del div/silabas
        silaba.innerHTML = '';

        //Cambio de imagen
        cambioImagen(cont);
        cambioCantidadTexto(cont + 1);

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
    if (e.target.classList.contains('btn-term')) {
      evaluacion(idParrafo - 1);
      hiddenBtnNext(e);
      modalResult.innerHTML = `Total de puntos optenidos: ${correctas}`;
    }
  });
  //Cambia la cantidad de enunciado faltantes
  function cambioCantidadTexto(cant) {
    cantActividad.innerHTML = `${cant}/${fraces.length + 1}`;
  }
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

  function evaluacion(indice) {
    var inputs = document.querySelector('input');

    if (correstas[indice] === inputs.value) {
      console.log('Correcta');

      correctas++;
    }
  }
});
