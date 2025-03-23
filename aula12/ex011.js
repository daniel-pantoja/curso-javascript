// Idade
var idade = 98;
console.log(`Você tem ${idade} anos.`);
if (idade < 18) {
  console.log("Não Trabalha");
} else if (idade < 18 || idade > 65) {
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório");
}

// Altura
var altura = 1.7;
console.log(`Sua altura é ${altura} metros.`);

if (altura < 1.5) {
  console.log("Você é considerado baixo.");
} else if (altura <= 1.7) {
  console.log("Você é de altura média.");
} else {
  console.log("Você é alto.");
}

// Temperatura
var temperatura = -2; 
console.log(`A temperatura é ${temperatura}°C.`);

if (temperatura < 0) {
  console.log('Muito frio!');
} else if (temperatura < 20) {
  console.log('Frio.');
} else if (temperatura < 30) {
  console.log('No Ponto.');
} else {
  console.log('Quente!');
}

// Nível
var nivel = 3; 
console.log(`Seu nível é ${nivel}.`);

if (nivel < 2) {
  console.log('Iniciante.');
} else if (nivel < 5) {
  console.log('Intermediário.');
} else {
  console.log('Avançado.');
}

// Anos de serviço em uma empresa
var anosServicos = 15; 
console.log(`Você tem ${anosServicos} anos de serviço.`);

if (anosServicos < 5) {
  console.log('Funcionário novo.');
} else if (anosServicos < 10) {
  console.log('Funcionário veterano.');
} else {
  console.log('Funcionário experiente!');
}