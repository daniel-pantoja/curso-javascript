// Ex 1
var velo = 50.7 

console.log(`Sua velocidade é ${velo}km/h`)

if (velo > 40) {
  console.log(`Você ultrapassou a velocidade de 40km/h, você foi MULTADO!!!`)
}

if (velo > 60) {
  console.log(`Cuidado! Você está acima do limite de 60km/h, sua velocidade é ${velo}km/h.`);
} 

// Ex 2
velo = 22.2;

console.log(`Sua velocidade é ${velo}km/h`);

if (velo > 40) {
  console.log(`Você ultrapassou a velocidade de 40km/h, você foi MULTADO!!!`);
} else {
  console.log(`Você está dentro do limite de velocidade, continue assim!`);
}

// Ex 3
velo = 100;

console.log(`Sua velocidade é ${velo}km/h`);

if (velo > 40) {
  console.log(`Você ultrapassou a velocidade de 40km/h, você foi MULTADO!!!`);
}
if (velo > 60) {
  console.log(`Cuidado! Você está acima do limite de 60km/h, sua velocidade é ${velo}km/h.`);
}

// Ex 4
velo = 4.1;

console.log(`Sua velocidade é ${velo}km/h`);

if (velo > 40) {
  console.log(`Você ultrapassou a velocidade de 40km/h, você foi MULTADO!!!`);
} else if (velo <= 40 && velo >= 30) {
  console.log(`Sua velocidade é aceitável, mas poderia ser melhor.`);
} else {
  console.log(`Você está bem abaixo do limite de velocidade, mantenha-se alerta!`);
}
