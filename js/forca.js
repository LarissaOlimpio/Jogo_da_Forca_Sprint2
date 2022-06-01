function desenhaPoste(){
    pincel.moveTo(400,10);
    pincel.lineTo(400,350);
    pincel.lineWidth = 10;
    pincel.strokeStyle = "#0A3871";
}
function desenhaSuperiorPoste(){
    pincel.moveTo(400,10);
    pincel.lineTo(600,10);
    pincel.stroke();
}
function desenhaCordaPoste(){
    pincel.moveTo(600,10);
    pincel.lineTo(600,40);
    pincel.stroke();
}
function desenhaBasePoste(){
    pincel.moveTo(300,350);
    pincel.lineTo(500,350);
    pincel.stroke();
}
function desenhaCabeca(){
    pincel.beginPath();
    pincel.arc(600,80,40,0,2*Math.PI);
    pincel.stroke();
}
function desenhaCorpo(){
    pincel.moveTo(600,120);
    pincel.lineTo(600,250);
    pincel.stroke();
}
function desenhaBracoEsq(){
    pincel.moveTo(600,130);
    pincel.lineTo(550,180);
    pincel.stroke();
}
function desenhaBracoDir(){
    pincel.moveTo(600,130);
    pincel.lineTo(650,180);
    pincel.stroke();
}
function desenhaPernaEsq(){
    pincel.moveTo(600,250);
    pincel.lineTo(550,300);
    pincel.stroke();
}
function desenhaPernaDir(){
    pincel.moveTo(600,250);
    pincel.lineTo(650,300);
    pincel.stroke();
}
function desenhaBoneco(){
    for(var i = 0; i <= letrasErradas.length; i++){
        if (i == 1){
            desenhaCabeca();
        }if (i == 2){
            desenhaCorpo();
        }if (i ==3){
            desenhaBracoEsq();
        }
        if (i == 4){
            desenhaBracoDir();
        }
        if (i ==5){
            desenhaPernaEsq();
        }
        if(i ==6){
            desenhaPernaDir();
        }
    }
}
