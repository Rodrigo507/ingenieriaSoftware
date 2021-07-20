var i = 0;
var rc = 0;
var ri=0;
var indiceAudio = 3;
const audio = document.getElementById('aud1');


function control() {
  cambioAudio(indiceAudio);
  indiceAudio += 2;
  if (i < 3) {
      verificar();
      resetear();
    }
    if (i == 2) {
      document.getElementById('resultados').innerHTML = 'TOTAL DE RESPUESTAS CORRECTAS:' + ' ' + rc;
    }
    i++;
}
function verificar() {
  if (i == 0) {
    var elem = document.getElementById('btnOp2');
    if (elem.checked == true) {
      rc++;
      repCorrecto();
    }
    else{
      repIncorrecto();
      ri++;
    }
  }
  if (i == 1) {
    var elem = document.getElementById('btnOp1');
    if (elem.checked == true) {
      repCorrecto();
      rc++;
    }
    else{
      repIncorrecto();
      ri++;
    }
  }
  if(i==2){
        var elem=document.getElementById("btnOp2");
        if(elem.checked==true){
          repCorrecto();
          rc++;
        }
        else{
          repIncorrecto();
        }
    }
}
function resetear() {
  var x1 = document.getElementById('btnOp1');
  var x2 = document.getElementById('btnOp2');
  x1.checked = false;
  x2.checked = false;
}
function reproducir(){
  var audiop=document.createElement("audio");
  audiop.setAttribute("src","../audio/instrucciones5.mp3");
  audiop.play();
}
function repCorrecto(){
  var audio  = document.createElement("audio");
  audio.setAttribute("src","../audio/correcto.mp3")
  audio.play();
}
function repIncorrecto(){
  var audio  = document.createElement("audio");
  audio.setAttribute("src","../audio/incorrecto.mp3")
  audio.play();
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
  document.getElementById("reproductor").onclick=reproducir;
};
