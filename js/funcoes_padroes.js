btnComecar.addEventListener("click",function (){
    sInicio.classList.add("ocultar");
    sNovaPalavra.classList.add("ocultar");
    sDesenhoForca.classList.remove("ocultar");
    sBotoesFinais.classList.remove("ocultar");
    document.addEventListener("keypress",function(e){
        const letra= e.key;
        const padrao = '[a-z ]';
        if (!(letra.match(padrao))){
            e.preventDefault();
    
        }else {
            if (letrasErradas.includes(letra)){
                //alert("letra repetida");
            }else if (palavraSecreta.includes(letra)){
                letrasCertas.push(letra);
            }else{
                letrasErradas.push(letra);
            }
        }atualizarTela();
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
    segredo.push(valorPalavra);
    console.log(segredo);
    console.log(valorPalavra);
    sNovaPalavra.classList.add("ocultar");
    sInicio.classList.add("ocultar");
    sDesenhoForca.classList.remove("ocultar");
    sBotoesFinais.classList.remove("ocultar");
})
btnDesistir.addEventListener("click",function(){
    location.reload();
})
botaoReiniciar.addEventListener("click",function(){
    location.reload();

 });
