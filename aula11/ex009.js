//Ex 01
var pais = `Brasil`;

console.log(`Vivendo em ${pais}`);

if (/*Se*/ pais != `Brasil`) {
  console.log(`Você é estrangeiro`);
} /*Se não*/ else {
  console.log(`Você é Brasileiro`);
}

// Ex 02
var profissao = "Médico";

console.log(`Sua profissão é ${profissao}`);

if (profissao !== "Engenheiro") {
  console.log(`Você não é engenheiro`);
} else {
  console.log(`Você é engenheiro`);
}

// Ex 03
var estuStatus = "aprovado";

console.log(`Seu status é: ${estuStatus}`);

if (estuStatus !== "aprovado") {
  console.log(`Você não está aprovado`);
} else {
  console.log(`Parabéns! Você está aprovado.`);
}

// Ex 04
var idade = 70;

console.log(`Sua idade é: ${idade}`);

if (idade >= 50) {
  console.log(
    `Você tem mais do que 50 anos, Você já é considerado coroa, bem velho.`
  );
} else if (idade >= 18) {
  console.log(`Você é maior de idade.`);
} else {
  console.log(`Você é menor de idade.`);
}
