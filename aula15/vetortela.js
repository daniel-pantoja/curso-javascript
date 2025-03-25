let valores = [9, 3, 6, 8, 2, 5]
valores.sort() //sort() - Ordena os números 
console.log(valores)

//Exemplo 1

for(let pos = 0; pos < valores.length; pos ++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


//Exemplo 2
for(let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//Exemplo 3
let valoresDobrados = valores.map(function(valor) {
  return valor * 2;
});
console.log('Valores dobrados:', valoresDobrados);

// Exemplo 4
let valoresFiltrados = valores.filter(function(valor) {
  return valor > 5;
});
console.log('Valores maiores que 5:', valoresFiltrados);

// Exemplo 5
let valorEncontrado = valores.find(function(valor) {
  return valor === 6; // Tenta encontrar o valor 6
});