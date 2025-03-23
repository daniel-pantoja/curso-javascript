//Repetição

//Exemplo 1
var repetir = 1;
console.log("Tudo certo?");
console.log("Tudo certo?");
console.log("Tudo certo?");
console.log("Tudo certo?");

//Exemplo 2
var repetir = 1;
while (repetir <= 4) {
  console.log(`Número ${repetir}`);
  repetir++;
}

var contador = 1;
while (contador <= 10) {
  console.log(`Contador: ${contador}`);
  contador++;
}

var numero = 1;
var soma = 0;
while (numero <= 5) {
  soma += numero; // Adiciona o número atual à soma
  numero++;
}
console.log(`A soma de 1 a 5 é: ${soma}`);

//Exemplo 3
var repetir = 1;
do {
  console.log(`Número ${repetir}`);
  repetir++;
} while (repetir <= 500);

var contador = 1;
do {
  console.log(`Contador: ${contador}`);
  contador++;
} while (contador <= 10);

var numero = 1;
var soma = 0;
do {
  soma += numero; // Adiciona o número atual à soma
  numero++;
} while (numero <= 5);
console.log(`A soma de 1 a 5 é: ${soma}`);
