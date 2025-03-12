let amigo = {
  nome: "Daniel",
  sexo: "M",
  peso: 60.1,
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  },
};

amigo.engordar(2);
console.log(`${amigo.peso} pesa ${amigo.peso}Kg`);
