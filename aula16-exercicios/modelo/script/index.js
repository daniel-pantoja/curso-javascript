let num = document.querySelector('input#nume');
let lista = document.querySelector('select#list');
let res = document.querySelector('div#saida');
let valores = [];

function isNumero(n) {
  return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
  return l.indexOf(Number(n)) !== -1;
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    
    // Cria um elemento de opção para a lista de seleção
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    
    // Limpar
    num.value = '';
    num.focus();
    
    // Exibe os valores na tela
    res.innerHTML = `Valores: ${valores.join(', ')}`;
  } else {
    window.alert(`Valor inválido ou já encontrado na lista.`);
  }
}