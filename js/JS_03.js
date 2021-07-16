var i=0;
var rc=0;
var ri=0;


function control(){
    if(i<6){
        if(i==0){
            document.getElementById("preg").innerHTML="¿Cómo me vestiré?";
            document.getElementById("preg1").innerHTML="Como una rana";
            document.getElementById("preg2").innerHTML="Como un gato";
        }
        if(i==1){
            document.getElementById("preg").innerHTML="¿Qué haré?";
            document.getElementById("preg1").innerHTML="Correré";
            document.getElementById("preg2").innerHTML="Saltaré";
        }
        if(i==2){
            document.getElementById("info").innerHTML="Hay una vaca grande en la granja. La vaca es blanca y negra. A la vaca le gusta comer pasto.";
            document.getElementById("preg").innerHTML="¿Qué hay en la granja?";
            document.getElementById("preg1").innerHTML="Una vaca grande";
            document.getElementById("preg2").innerHTML="Un burro";
            document.getElementById("fotos").src="../img/vaca.jpg";
        }
        if(i==3){
            document.getElementById("preg").innerHTML="¿De qué color es?";
            document.getElementById("preg1").innerHTML="Marrón";
            document.getElementById("preg2").innerHTML="Blanca y negra";
        }
        if(i==4){
            document.getElementById("preg").innerHTML="¿Qué come?";
            document.getElementById("preg1").innerHTML="Pasto";
            document.getElementById("preg2").innerHTML="Chocolate";
        }
        verificar();
        resetear();
    }
    if(i==5){
        document.getElementById("preg").innerHTML="Lograste acertar"+" "+rc+" "+"veces";
    }
    i++;
}
function verificar(argument){
    if(i==0){
        var elem= document.getElementById("2");
        if(elem.checked==true){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
            ri++;
        }
    }
    if(i==1){
        var elem= document.getElementById("1");
        if(elem.checked==true){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
            ri++;
        }
    }
    if(i==2){
        var elem= document.getElementById("2");
        if(elem.checked==true){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
            ri++;
        }
    }
    if(i==3){
        var elem= document.getElementById("1");
        if(elem.checked==true){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
            ri++;
        }
    }
    if(i==4){
        var elem= document.getElementById("2");
        if(elem.checked==true){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
            ri++;
        }
    }
    if(i==5){
        var elem= document.getElementById("1");
        if(elem.checked==true){
            repCorrecto();
            rc++;
        }
        else{
            repIncorrecto();
            ri++;
        }
    }
}
function resetear(){
    var x1=document.getElementById("1");
    var x2=document.getElementById("2");
    x1.checked=false;
    x2.checked=false;
}
function reproducir(){
    var audiop=document.createElement("audio");
    audiop.setAttribute("src","../audio/instrucciones3.mp3");
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

/*-----------------------------------------------------------------------*/
window.onload = function (){
    
    document.getElementById("btnOK").onclick=control;
    document.getElementById("reproductor").onclick=reproducir;
}