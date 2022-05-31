btnComecar.addEventListener("click",function (){
    sInicio.classList.add("ocultar");
    sNovaPalavra.classList.add("ocultar");
    sDesenhoForca.classList.remove("ocultar");
    sBotoesFinais.classList.remove("ocultar");
    document.addEventListener("keypress",function(e){
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
})
btnAdicionarPalavra.addEventListener("click",function(){
    sInicio.classList.add("ocultar");
    sDesenhoForca.classList.add("ocultar");
    sBotoesFinais.classList.add("ocultar");
    sNovaPalavra.classList.remove("ocultar");
    inputPalavra.focus();
})
btnCancelar.addEventListener("click",function(){
    sDesenhoForca.classList.add("ocultar");
    sBotoesFinais.classList.add("ocultar");
    sNovaPalavra.classList.add("ocultar");
    sInicio.classList.remove("ocultar");
})
btnSalvarPalavra.addEventListener("click",function(){
    valorPalavra = (inputPalavra.value).toLowerCase();
    
    if (valorPalavra.length > 8){
        alert("Digite uma palavra de até 8 letras");
    }else{
        segredo.push(valorPalavra);
        palavraSecreta = segredo[Math.floor(Math.random()*totalSegredos)];
        sNovaPalavra.classList.add("ocultar");
        sInicio.classList.add("ocultar");
        sDesenhoForca.classList.remove("ocultar");
        sBotoesFinais.classList.remove("ocultar");
        
    }
    
})
btnDesistir.addEventListener("click",function(){
    location.reload();
})
btnReiniciar.addEventListener("click",function(){
    limpaTela();
});
function limpaTela(){
    mensagem = "";
    console.log(mensagem);
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
    
    console.log(palavraSecreta);
    console.log(letrasErradas);
    console.log(letrasCertas );
}

