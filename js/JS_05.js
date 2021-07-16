var i = 0;
var rc = 0;
var indiceAudio = 3;
const audio = document.getElementById('aud1');
//const audioP2=document.getElementById("aud2");

function control() {
  cambioAudio(indiceAudio);
  indiceAudio += 2;
  //   if (i < 2) {
  //     if (i == 0) {
  //       audio.src = '../audio/audio3.mp3';
  //       console.log(audio.src);
  //     }
  //     verificar();
  //     resetear();
  //   }
  //   if (i == 1) {
  //     document.getElementById('prueba').innerHTML = 'TOT:' + ' ' + rc;
  //   }
  //   i++;
}
function verificar() {
  if (i == 0) {
    var elem = document.getElementById('btnOp2');
    if (elem.checked == true) {
      rc++;
    }
  }
  if (i == 1) {
    var elem = document.getElementById('btnOp1');
    if (elem.checked == true) {
      rc++;
    }
  }
  /*if(i==2){
        var elem=document.getElementById("btnOp2");
        if(elem.checked==true){
            rc++;
        }
    }*/
}
function resetear() {
  var x1 = document.getElementById('btnOp1');
  var x2 = document.getElementById('btnOp2');
  x1.checked = false;
  x2.checked = false;
}
function cambio() {
  var xx1 = document.getElementById('btnOp1');
  var xx2 = document.getElementById('btnOp2');
  if (xx1.checked == true) {
    xx2.checked = false;
  }
}
function cambio2() {
  var x1 = document.getElementById('btnOp1');
  var x2 = document.getElementById('btnOp2');
  if (x2.checked == true) {
    x1.checked = false;
  }
}

//Cambio de audio
function cambioAudio(cont) {
  const audio1 = document.getElementById('aud1');
  const audio2 = document.getElementById('aud2');
  audio1.src = `../audio/audio${cont}.mp3`;
  audio2.src = `../audio/audio${cont + 1}.mp3`;
}
/*--------------------------------------------------------*/
window.onload = function () {
  document.getElementById('btnAceptar').onclick = control;
  document.getElementById('prueba1').onmouseover = cambio;
  document.getElementById('prueba2').onmouseover = cambio2;
};
