let aluno = {
  nome: "Daniel",
  notas: [],
  nota(nota) {
    console.log("Adicionando nota...");
    this.notas.push(nota);
  },
  media() {
    let soma = this.notas.reduce((acc, curr) => acc + curr, 0);
    return soma / this.notas.length;
  },
};

aluno.nota(7);
aluno.nota(9);
console.log(`A média do ${aluno.nome} é ${aluno.media()}.`);