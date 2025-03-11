//Fatorial tradicional 3! = 3 x 2 x 1 = 6

function fatorial(n) {
  let fato = 1
  for(let c = n; c > 1; c--) {
    fato *= c
  }
  return fato 
}
console.log(fatorial(3))