var agr = new Date();
var semana = agr.getDay(); //Dias da semana

//console.log(semana)

switch (semana) {
  case 0:
    console.log("Domingo");
    break;

  case 1:
    console.log("Segunda");
    break;

  case 2:
    console.log("Terça");
    break;

  case 3:
    console.log("Quarta");
    break;

  case 4:
    console.log("Quinta");
    break;

  case 5:
    console.log("Sexta");
    break;

  case 6:
    console.log("Sábado");
    break;

  default:
    console.log("Dia inválido");
    break;
}

var categoria = "F";

switch (categoria) {
  case "A":
    console.log("Categoria A");
    break;

  case "B":
    console.log("Categoria B");
    break;

  case "C":
    console.log("Categoria C");
    break;

  case "D":
    console.log("Categoria D");
    break;

  default:
    console.log("Categoria inválida");
    break;
}
