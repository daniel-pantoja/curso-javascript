let valores = [9, 3, 6, 8, 2, 5]
valores.sort() //sort() - Ordena os números 
//console.log(valores)

//Exemplo 1
/*
for(let pos = 0; pos < valores.length; pos ++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//Exemplo 2
for(let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}