function soma(n1=0, n2=0) { 
  return n1 + n2 
}
console.log(soma(19, 18))

function subtracao(n1 = 0, n2 = 0) {
  return n1 - n2;
}
console.log(subtracao(10, 5));
console.log(subtracao(8));     

function multiplicacao(n1 = 1, n2 = 1) {
  return n1 * n2;
}
console.log(multiplicacao(4, 5)); 
console.log(multiplicacao(7)); 

function divisao(n1 = 0, n2 = 1) {
  if (n2 === 0) {
    return "Erro: Divisão por zero!";
  }
  return n1 / n2;
}
console.log(divisao(10, 2)); 
console.log(divisao(8, 0));  

function quadrado(n = 0) {
  return n * n;
}
console.log(quadrado(4)); 
console.log(quadrado());  

function fatorial(n = 0) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5)); 
console.log(fatorial(0)); 

function estaNoIntervalo(n = 0, min = 0, max = 100) {
  return n >= min && n <= max;
}
console.log(estaNoIntervalo(50, 0, 100)); 
console.log(estaNoIntervalo(150, 0, 100));

