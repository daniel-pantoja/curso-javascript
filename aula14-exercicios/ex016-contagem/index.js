function contar(){
  let ini = document.getElementById('ini')
  let fim = document.getElementById('fm')
  let passo = document.getElementById('pss')
  let saida = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    saida.innerHTML = 'Impossível contar!'
    //window.alert(`[ERRO] Faltam dados!`)
  } else {
    saida.innerHTML = 'Resultado: '
    let i = Number(ini.value)
    let f = Number(fim.value) 
    let p = Number(passo.value)
    if (p <= 0) {
      window.alert('Passo inválido! Vou considerar o PASSO 1')
      p = 1
    }
    if (i < f){
      //Contagem crescente
      for(let repetir = i; repetir <= f; repetir += p){
        saida.innerHTML += ` ${repetir},`
      }
    } else {
      //Contagem regressiva 
      for(let repetir = i; repetir >= f; repetir -= p) {
        saida.innerHTML += ` ${repetir}, `
      }
    }
    saida.innerHTML += ` \u{1F3C1}.`
  }
}