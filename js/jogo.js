//pegando os elementos  da section com a classe inicio
var sInicio = document.querySelector(".inicio");
var btnComecar = document.querySelector("#comecar");
var btnAdicionarPalavra = document.querySelector("#adicionar-palavra");

//pegando do HTML os elementos da section com a classe desenho-forca para a lógica do jogo//
var sDesenhoForca = document.querySelector('.desenho-forca');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var divLetraCerta = document.querySelector(".letras-certas");
var divtracinho = document.querySelector(".tracinho");
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

document.addEventListener("keypress", testar = (e) =>{
    const letra= e.key;
    const padrao = '[a-z]';
    if ((!(letra.match(padrao))) || (letra == "Enter")){
        e.preventDefault();

    }else if (palavraSecreta.includes(letra)){
        letrasCertas.push(letra);
    }else if (!(letrasErradas.includes(letra))){
        letrasErradas.push(letra);
    }
    atualizarTela();
})
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
        divLetraErrada.innerHTML += letrasErradas[i].toUpperCase() + " ";
    }
}
function mostrarLetrasCertas(){
    divLetraCerta.innerHTML = " ";
    palavraSecreta.split("").forEach(letra => {
        if (letrasCertas.includes(letra)){
            divLetraCerta.innerHTML += letra + " ";
        }else{
            divLetraCerta.innerHTML += ' _ ';
        }
    });
}
function verificaJogo(){
    if (letrasErradas.length == 6 && mensagem.length < 1){
        mensagem = ("GAME OVER!" + "<br>" + "Você perdeu!"+ "<br>" + "A palavra secreta era: " + palavraSecreta);
        resultadoJogo.style.color = 'orange';
    }
    if (palavraSecreta.toUpperCase() == divLetraCerta.innerText && mensagem.length < 1){
        mensagem = "Parabéns!!" + "<br>" + "Você ganhou!!";
        resultadoJogo.style.color = 'green';
        
    }
    resultadoJogo.innerHTML += mensagem;
    if (mensagem.length != 0 ){
        document.removeEventListener("keypress",testar);
    }
}  
function limpaTela(){
    mensagem = "";
    palavraSecreta = segredo[Math.floor(Math.random()*totalSegredos)];
    total = palavraSecreta.split("");
    total = total.length;
    divLetraCerta.innerHTML = " ";
    divLetraErrada.innerHTML = " ";
    resultadoJogo.innerHTML = "";
    letrasCertas = [];
    letrasErradas = [];
    pincel.clearRect(500,35,700,300);
    atualizarTela();
}
