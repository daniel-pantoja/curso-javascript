let num = [8, 3, 6, 7, 9,]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
  console.log('O valor não foi encontrado!')
} else {
  console.log(`O valor 8 está na posição ${pos}`)
}

let numeros = [5, 3, 8, 1, 4];
numeros.push(7); 
numeros.sort((a, b) => a - b); 
console.log(numeros);
console.log(`O vetor de números tem ${numeros.length} posições`);
console.log(`O primeiro número do vetor é ${numeros[0]}`);
let posNumero = numeros.indexOf(3);
if (posNumero == -1) {
  console.log('O número não foi encontrado!');
} else {
  console.log(`O número 3 está na posição ${posNumero}`);
}

let frutas = ['Banana', 'Morango', 'Laranja', 'Pera'];
frutas.push('Uva'); 1
frutas.sort(); 
console.log(frutas);
console.log(`O vetor de frutas tem ${frutas.length} posições`);
console.log(`A primeira fruta do vetor é ${frutas[0]}`);
let posFruta = frutas.indexOf('Laranja');
if (posFruta == -1) {
  console.log('A fruta não foi encontrada!');
} else {
  console.log(`A fruta Laranja está na posição ${posFruta}`);
}