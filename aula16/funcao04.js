//Fatorial tradicional 3! = 3 x 2 x 1 = 6

function fatorial(n) {
  let fato = 1;
  for (let c = n; c > 1; c--) {
    fato *= c;
  }
  return fato;
}
console.log(fatorial(3));

function somat(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}
console.log(somat(3));

function contaPrimos(n) {
  let contador = 0;
  for (let i = 2; i <= n; i++) {
    let ehPrimo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        ehPrimo = false;
        break;
      }
    }
    if (ehPrimo) contador++;
  }
  return contador;
}
console.log(contaPrimos(62));

function media(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma / array.length;
}
console.log(media([10, 20, 30]));
