//pegando os elementos  da section com a classe inicio
let sectionInicio = document.querySelector("#inicio");
let btnComecar = document.querySelector("#comecar");
let btnAdicionarPalavra = document.querySelector("#adicionarPalavra");

//pegando do HTML os elementos da section com a classe desenho-forca para a lógica do jogo//
let sectionDesenhoForca = document.querySelector(".desenhoForca");
let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
let divLetraCerta = document.querySelector(".letrasCertas");
let divtracinho = document.querySelector(".tracinho");
let divLetraErrada = document.querySelector(".letrasErradas");
let resultadoJogo = document.querySelector(".resultado");
let inputCelular = document.querySelector(".inputCelular");

//pegando os elementos da section com a classe nova-palavra
let sectionNovaPalavra = document.querySelector(".novaPalavra");
let inputPalavra = document.querySelector(".textAreaPalavraNova");
let btnSalvarPalavra = document.querySelector("#salvar");
let btnCancelar = document.querySelector("#cancelar");
let valorPalavra = "";
//pegando os elementos da section com a classe botões-finais
let sectionBotoesFinais = document.querySelector(".botoesFinais");
let btnReiniciar = document.querySelector("#novoJogo");
let btnDesistir = document.querySelector("#desistir");

//sorteando a palavra secreta
segredo = [
  "desafio",
  "alura",
  "trabalho",
  "cultura",
  "escola",
  "projeto",
  "sistema",
  "pesquisa",
  "curso",
  "jogos",
];
let totalSegredos = segredo.length;
let palavraSecreta = segredo[Math.floor(Math.random() * totalSegredos)];

let letrasCertas = [];
let letrasErradas = [];
let total = palavraSecreta.split("");
total = total.length;
let mensagem = "";

sectionDesenhoForca.classList.add("ocultar");
sectionNovaPalavra.classList.add("ocultar");
sectionBotoesFinais.classList.add("ocultar");


document.addEventListener(
  "keypress",
  (testar = (e) => {
    const letra = e.key;
    const padrao = "[a-z]";
    if (!letra.match(padrao) || letra == "Enter") {
      e.preventDefault();
    } else if (palavraSecreta.includes(letra)) {
      letrasCertas.push(letra);
    } else if (!letrasErradas.includes(letra)) {
      letrasErradas.push(letra);
    }
    atualizarTela();
  })
);
tracejar(total);
desenhaPoste();
desenhaSuperiorPoste();
desenhaCordaPoste();
desenhaBasePoste();

function atualizarTela() {
  mostrarLetrasCertas();
  mostrarLetrasErradas();
  desenhaBoneco();
  verificaJogo();
}
//Colocando os traços embaixo das letras
function tracejar(tamanho) {
  for (let i = 0; i < tamanho; i++) {
    divLetraCerta.innerHTML += " _ ";
  }
}
function mostrarLetrasErradas() {
  divLetraErrada.innerHTML = " ";
  for (let i = 0; i < letrasErradas.length; i++) {
    divLetraErrada.innerHTML += letrasErradas[i].toUpperCase() + " ";
  }
}
function mostrarLetrasCertas() {
  divLetraCerta.innerHTML = " ";
  palavraSecreta.split("").forEach((letra) => {
    if (letrasCertas.includes(letra)) {
      divLetraCerta.innerHTML += letra;
    } else {
      divLetraCerta.innerHTML += " _ ";
    }
  });
}
function verificaJogo() {
  if (letrasErradas.length == 6 && mensagem.length < 1) {
    mensagem =
      "GAME OVER!" +
      "<br>" +
      "Você perdeu!" +
      "<br>" +
      "A palavra secreta era: " +
      palavraSecreta;
    resultadoJogo.style.color = "orange";
  }
  if (
    palavraSecreta.toUpperCase() == divLetraCerta.innerText &&
    mensagem.length < 1
  ) {
    mensagem = "Parabéns!!" + "<br>" + "Você ganhou!!";
    resultadoJogo.style.color = "green";
  }
  resultadoJogo.innerHTML += mensagem;
  if (mensagem.length != 0) {
    document.removeEventListener("keypress", testar);
  }
}
function limpaTela() {
  mensagem = "";
  palavraSecreta = segredo[Math.floor(Math.random() * totalSegredos)];
  total = palavraSecreta.split("");
  total = total.length;
  divLetraCerta.innerHTML = " ";
  divLetraErrada.innerHTML = " ";
  resultadoJogo.innerHTML = "";
  letrasCertas = [];
  letrasErradas = [];
  pincel.clearRect(500, 35, 700, 300);
  atualizarTela();
}
