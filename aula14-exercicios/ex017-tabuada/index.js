function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seletabu')

    if (num.value.length == 0) {
        window.alert('Digite um número...')
    } else {
        let n = Number(num.value)
        let c = 
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}