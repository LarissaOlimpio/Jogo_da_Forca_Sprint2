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
var botaoReiniciar = document.querySelector("#novo-jogo");
var btnDesistir = document.querySelector("#desistir");

//sorteando a palavra secreta
segredo = ["desafio","alura","trabalho","cultura","escola","projeto","foco","pesquisa","curso","jogos"];
var totalSegredos = segredo.length;
var palavraSecreta = segredo[Math.floor(Math.random()*totalSegredos)];
console.log(palavraSecreta);

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
    divLetraCerta.innerHTML = "";
    palavraSecreta.split("").forEach(letra => {
        if (letrasCertas.includes(letra)){
            divLetraCerta.innerHTML += letra;
        }else{
            divLetraCerta.innerHTML += ' _ ';
        }
    });
}
function verificaJogo(){
    
    if (letrasErradas.length == 6 && letrasErradas.length < 7){
        mensagem = ("GAME OVER!" + "<br>" + "Você perdeu!")
        passandoResultado(mensagem);
        resultadoJogo.style.color = 'orange';
    }
    if (palavraSecreta.toUpperCase() == divLetraCerta.innerText){
        mensagem = "Parabéns!!" + "<br>" + "Você ganhou!!";
        passandoResultado(mensagem);
        resultadoJogo.style.color = 'green';
    }
}
function passandoResultado(mensagem){
    resultadoJogo.innerHTML += mensagem;
}


    
