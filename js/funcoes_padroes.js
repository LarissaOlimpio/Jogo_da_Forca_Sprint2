btnComecar.addEventListener("click", function () {
  sectionInicio.classList.add("ocultar");
  sectionNovaPalavra.classList.add("ocultar");
  sectionDesenhoForca.classList.remove("ocultar");
  sectionBotoesFinais.classList.remove("ocultar");
  limpaTela();
});
btnAdicionarPalavra.addEventListener("click", function () {
  sectionInicio.classList.add("ocultar");
  sectionDesenhoForca.classList.add("ocultar");
  sectionBotoesFinais.classList.add("ocultar");
  sectionNovaPalavra.classList.remove("ocultar");
  inputPalavra.focus();
  document.addEventListener("keypress", function (e) {
    const letra = e.key;
    const padrao = "[a-z]";
    if (!letra.match(padrao) || letra == "Enter") {
      e.preventDefault();
    }
  });
});
btnCancelar.addEventListener("click", function () {
  location.reload();
});
btnSalvarPalavra.addEventListener("click", function () {
  valorPalavra = inputPalavra.value.toLowerCase();
  if (valorPalavra.length > 8) {
    alert("Digite uma palavra de até 8 letras");
  } else {
    segredo.push(valorPalavra);
    sectionNovaPalavra.classList.add("ocultar");
    sectionInicio.classList.add("ocultar");
    sectionDesenhoForca.classList.remove("ocultar");
    sectionBotoesFinais.classList.remove("ocultar");
  }
  limpaTela();
});
btnDesistir.addEventListener("click", function () {
  location.reload();
});
btnReiniciar.addEventListener("click", function () {
  limpaTela();
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
});