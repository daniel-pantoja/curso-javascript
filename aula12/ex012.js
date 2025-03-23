var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);

if (hora < 12) {
  console.log("Bom Dia!");
} else if (hora <= 18) {
  console.log("Boa Tarde!");
} else {
  console.log("Boa Noite!");
}

var dataAtual = new Date();
var dia = dataAtual.getDay();
console.log(`Hoje é dia ${dia}.`);

if (dia === 0 || dia === 6) {
  console.log("Final de semana!");
} else {
  console.log("Dia de semana!");
}

var temperaturaAtual = 30;
console.log(`A temperatura atual é ${temperaturaAtual}°C.`);

if (temperaturaAtual < 15) {
  console.log('Está frio.');
} else if (temperaturaAtual <= 25) {
  console.log('Está agradável.');
} else {
  console.log('Está quente.');
}
