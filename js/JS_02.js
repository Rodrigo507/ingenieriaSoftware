var i=0;
var rc=0;

function control(){
    ocultar();
    if(i<3){
        if(i==0){
            document.getElementById("parrafo").innerHTML="Mi mamá prepara un delicioso";
            document.getElementById("btn1").innerText="PASTEL";
            document.getElementById("btn2").innerText="ESTRELLA";
            document.getElementById("btn3").innerText="DADO";
        }
        if(i==1){
            document.getElementById("parrafo").innerHTML="Diego pasea a su";
            document.getElementById("btn1").innerText="AVIÓN";
            document.getElementById("btn2").innerText="PERRO";
            document.getElementById("btn3").innerText="PIZZA";
        }
        evaluar();
    }
    if(i==2){
        document.getElementById("parrafo").innerHTML="Respuestas correctas: "+" "+rc;
    }
    i++;
}
function evaluar(){
    if(i==0){
        var num = document.getElementById("numImg").innerHTML;
        //alert(num);
        if(num==3){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
        }
    }
    if(i==1){
        var num = document.getElementById("numImg").innerHTML;
        if(num==1){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
        }
    }
    if(i==2){
        var num = document.getElementById("numImg").innerHTML;
        if(num==2){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
        }
    }
}


function cargarImg(){
    var nom = document.getElementById("btn1").innerText;
    document.getElementById("fotos").src="../img/"+nom+".jpg";
    document.getElementById("conImg").style.display= "block";
    document.getElementById("numImg").innerHTML="1";
}
function cargarImg2(){
    var nom = document.getElementById("btn2").innerText;
    document.getElementById("fotos").src="../img/"+nom+".jpg";
    document.getElementById("conImg").style.display= "block";
    document.getElementById("numImg").innerHTML="2";
}
function cargarImg3(){
    var nom = document.getElementById("btn3").innerText;
    document.getElementById("fotos").src="../img/"+nom+".jpg";
    document.getElementById("conImg").style.display= "block";
    document.getElementById("numImg").innerHTML="3";
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
function reproducir(){
    var audiop=document.createElement("audio");
    audiop.setAttribute("src","../audio/instrucciones2.mp3");
    audiop.play();
}
function ocultar(){
    document.getElementById("conImg").style.display="none";
}

window.onload = function(){
    document.getElementById("btnAceptar").onclick=control;
    document.getElementById("btn1").onclick=cargarImg;
    document.getElementById("btn2").onclick=cargarImg2;
    document.getElementById("btn3").onclick=cargarImg3;
    document.getElementById("reproductor").onclick=reproducir;
}