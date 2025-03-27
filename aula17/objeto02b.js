let conta = {
  titular: "Ramilly",
  saldo: 2,
  depositar(valor = 0) {
    console.log("Depositando...");
    this.saldo += valor;
  },
  sacar(valor = 0) {
    console.log("Sacando...");
    this.saldo -= valor;
  },
};

conta.depositar(400);
conta.sacar(300);
console.log(`A conta de ${conta.titular} tem ${conta.saldo} reais.`);

let filme = {
  titulo: "O Senhor dos Anéis: A Sociedade do Anel",
  ano: 2001,
  genero: "Fantasia",
  assistir() {
    console.log(`Assistindo "${this.titulo}"...`);
  },
};

filme.assistir();
console.log(
  `"${filme.titulo}" é um filme de ${filme.ano} do gênero ${filme.genero}.`
);
