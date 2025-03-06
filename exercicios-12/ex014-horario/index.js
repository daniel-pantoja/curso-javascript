var msg = document.getElementById('msg')
var img = document.getElementById('foto')
var data = new Date()

var hora = data.getHours()
//var hora = 15


if (hora >= 0 && hora < 12) {
  //Bom dia
  img.src = 'imagens/manha.jpg'
  document.body.style.background = '#4e90aa'
  msg.innerHTML = `Agora são as ${hora} horas da Manhã, Bom Dia!`

} else if (hora >= 12 && hora < 18){
  //Boa tarde
  img.src = 'imagens/tarde.jpg'
  document.body.style.background = '#b47c13'
  msg.innerHTML = `Agora são as ${hora} horas da Tarde, Boa Tarde!`

} else {
  //Boa noite
  img.src = 'imagens/noite.jpg'
  document.body.style.background = '#01317a'
  msg.innerHTML = `Agora são as ${hora} horas da Noite, Boa Noite!`
}
