//pegando os elementos  da section com a classe inicio
var sInicio = document.querySelector(".inicio");
var btnComecar = document.querySelector("#comecar");
var btnAdicionarPalavra = document.querySelector("#adicionar-palavra");
var teste = "oi";
//pegando do HTML os elementos da section com a classe desenho-forca para a lógica do jogo//
var sDesenhoForca = document.querySelector('.desenho-forca');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var divLetraCerta = document.querySelector(".letras-certas");
var divLetraErrada = document.querySelector(".letras-erradas");
var resultadoJogo = document.querySelector(".resultado");

//pegando os elementos da section com a classe nova-palavra
var sNovaPalavra = document.querySelector('.nova-palavra');
var inputPalavra = document.querySelector(".input-palavra-nova");
var btnSalvarPalavra = document.querySelector("#salvar");
var btnCancelar  = document.querySelector("#cancelar");
var valorPalavra = "";
//pegando os elementos da section com a classe botões-finais
var sBotoesFinais = document.querySelector('.botoes-finais');
var btnReiniciar = document.querySelector("#novo-jogo");
var btnDesistir = document.querySelector("#desistir");

//sorteando a palavra secreta
segredo = ["desafio","alura","trabalho","cultura","escola","projeto","sistema","pesquisa","curso","jogos"];
var totalSegredos = segredo.length;
var palavraSecreta = segredo[Math.floor(Math.random()*totalSegredos)];

var letrasCertas = [];
var letrasErradas = [];
var total = palavraSecreta.split("");
total = total.length;
var mensagem = "";


sDesenhoForca.classList.add("ocultar");
sNovaPalavra.classList.add("ocultar");
sBotoesFinais.classList.add("ocultar");


tracejar(total);
desenhaPoste();
desenhaSuperiorPoste();
desenhaCordaPoste();
desenhaBasePoste();

function atualizarTela(){
    mostrarLetrasCertas();
    mostrarLetrasErradas();
    desenhaBoneco();
    verificaJogo();
 
}
//Colocando os traços embaixo das letras
function tracejar(tamanho){
    for(var i = 0; i < tamanho; i++){
        divLetraCerta.innerHTML += ' _ ';
    }
}
function mostrarLetrasErradas(){
    divLetraErrada.innerHTML = " ";
    for(var i = 0; i<letrasErradas.length;i++){
        divLetraErrada.innerHTML += letrasErradas[i].toUpperCase();
    }
}
function mostrarLetrasCertas(){
    divLetraCerta.innerHTML = " ";
    palavraSecreta.split("").forEach(letra => {
        if (letrasCertas.includes(letra)){
            divLetraCerta.innerHTML += letra;
        }else{
            divLetraCerta.innerHTML += ' _ ';
        }
    });
}
function verificaJogo(){
    
    if (letrasErradas.length == 6 && letrasErradas.length < 7 && mensagem.length < 1){
        mensagem = ("GAME OVER!" + "<br>" + "Você perdeu!"+ "<br>" + "A palavra secreta era: " + palavraSecreta);
        passandoResultado(mensagem);
        resultadoJogo.style.color = 'orange';
        travarTeclado(mensagem);
    }
    if (palavraSecreta.toUpperCase() == divLetraCerta.innerText && mensagem.length < 1){
        mensagem = "Parabéns!!" + "<br>" + "Você ganhou!!";
        passandoResultado(mensagem);
        resultadoJogo.style.color = 'green';
        travarTeclado(mensagem);
    }
}
//passando o resultado para o HTMl
function passandoResultado(mensagem){
    resultadoJogo.innerHTML += mensagem;
}
// Faz com que o usuário não consiga digitar após perder ou ganhar
function travarTeclado(mensagem){
    if (mensagem.length>0){
        document.addEventListener("keydown",function(e){
            e.preventDefault();
            e.stopPropagation();
        })

    }
}

    
