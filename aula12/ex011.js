var idade = 98
console.log(`Você tem ${idade} anos.`)
if (idade < 18) {
  console.log('Não Trabalha')
} else if (idade < 18 || idade > 65) {
  console.log('Voto opcional')
} else {
  console.log('Voto obrigatório')
}