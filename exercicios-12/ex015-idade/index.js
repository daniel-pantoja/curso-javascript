function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var frano = document.getElementById('txano')
  var saida = document.querySelector('div#saida')

  if (frano.value.length == 0 || Number(frano.value) > ano){
    window.alert(`[ERRO] verificar os dados e tente novamente!`)
  } else {
    var fsex = document.getElementsByName('radio')
    var idade = ano - Number(frano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
      genêro = 'Homem'
      if (idade >=0 && idade < 12)/*Criança*/{

      } else if (idade < 21)/*Jovem*/{

      } else if (idade < 50)/*Adulto*/{

      } else/*Idoso*/{

      } 


    } else if (fsex[1].checked){
      gênero = 'Mulher'
      if (idade >=0 && idade < 12)/*Criança*/{

      } else if (idade < 21)/*Jovem*/{

      } else if (idade < 50)/*Adulto*/{

      } else/*Idoso*/{

      }}
    
  }
}