function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var frano = document.getElementById("txano");
  var saida = document.querySelector("div#saida");

  if (frano.value.length == 0 || Number(frano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("genero");
    var idade = ano - Number(frano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      // Masculino
      genero = "Homem";
      if (idade >= 0 && idade < 12) {
        // Criança
        img.setAttribute("src", "imagens/crianca-homem.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "imagens/jovem-homem.jpg");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "imagens/adulto-homem.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "imagens/coroa-homem.jpg");
      }
    } else if (fsex[1].checked) {
      // Feminino
      genero = "Mulher";
      if (idade >= 0 && idade < 12) {
        // Criança
        img.setAttribute("src", "imagens/crianca-mulher.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "imagens/jovem-mulher.jpg");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "imagens/adulto-mulher.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "imagens/coroa-mulher.jpg");
      }
    } else {
      window.alert("[ERRO] Selecione um gênero!");
      return;
    }

    saida.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    saida.appendChild(img);
  }
}
