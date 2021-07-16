//var vec1=["POLLOS","CABALLO","LOBO"];
var i=0;
var rc=0;

function control(){
    if(i<5){
        if(i==0){
            document.getElementById("btnOp1").innerText="LOBO";
            document.getElementById("btnOp2").innerText="CABALLO";
            document.getElementById("btnOp3").innerText="GATO";
            document.getElementById("fotos").src="../img/lobo.jpg";
        }
        if(i==1){
            document.getElementById("btnOp1").innerText="PERRO";
            document.getElementById("btnOp2").innerText="TORTUGA";
            document.getElementById("btnOp3").innerText="JIRAFA";
            document.getElementById("fotos").src="../img/jirafa.jpg";
        }
        if(i==2){
            document.getElementById("btnOp1").innerText="CONEJO";
            document.getElementById("btnOp2").innerText="ARDILLA";
            document.getElementById("btnOp3").innerText="BALLENA";
            document.getElementById("fotos").src="../img/ardilla.jpg";
        }
        if(i==3){
            document.getElementById("btnOp1").innerText="MONOS";
            document.getElementById("btnOp2").innerText="GALLINA";
            document.getElementById("btnOp3").innerText="PECES";
            document.getElementById("fotos").src="../img/clasificacion-peces-dieta-1280x720x80xX.jpg";
        }
        verificar();
        resetear();
    }
    if(i==4){
        //document.getElementById("conPalabra").value="Correctas: "+" "+rc;
        document.getElementById("resultado").innerHTML="TOTAL DE RESPUESTAS CORRECTAS:"+" "+rc;
    }
    i++;
}
function verificar(){
    if(i==0){
        var resp= document.getElementById("conPalabra").value;
        var op="OSOS";
        if(resp==op){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
        }
    }
    if(i==1){
        var resp= document.getElementById("conPalabra").value;
        var op="LOBO";
        if(resp==op){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
        }
    }
    if(i==2){
        var resp= document.getElementById("conPalabra").value;
        var op="JIRAFA";
        if(resp==op){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
        }
    }
    if(i==3){
        var resp= document.getElementById("conPalabra").value;
        var op="ARDILLA";
        if(resp==op){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
        }
    }
    if(i==4){
        var resp= document.getElementById("conPalabra").value;
        var op="PECES";
        if(resp==op){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
        }
    }
}
function resetear(){
    document.getElementById("conPalabra").value="";
}

function cargar_seleccion(){
    var con= document.getElementById("btnOp1").innerText;
    document.getElementById("conPalabra").value=con;
}
function cargar_seleccion2(){
    var con=document.getElementById("btnOp2").innerText;
    document.getElementById("conPalabra").value=con;
}
function cargar_seleccion3(){
    var con=document.getElementById("btnOp3").innerText;
    document.getElementById("conPalabra").value=con;
}
function reproducir(){
    var audiop=document.createElement("audio");
    audiop.setAttribute("src","../audio/instrucciones1.mp3");
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

/*-------------------------------------------------------------------------- */
window.onload = function (){
    document.getElementById("btnOp1").onclick=cargar_seleccion;
    document.getElementById("btnOp2").onclick=cargar_seleccion2;
    document.getElementById("btnOp3").onclick=cargar_seleccion3;
    document.getElementById("reproductor").onclick=reproducir;
    document.getElementById("btnAceptar").onclick=control;
}