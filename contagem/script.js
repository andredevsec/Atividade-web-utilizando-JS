function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: <br>'
        let i= Number(ini.value)
        let f= Number(fim.value)
        let p= Number(passo.value)

        if (p <= 0){
            window.alert("Passo invalido! Considerando PASSO 1")
            p = 1
        }

        if(i < f){
            //Contagem crescente
            for(let c= i; c <= f; c += p) {
            res.innerHTML +=  `${c} \u{1F47E}`
        }
        res.innerHTML += `\u{1F47D}`
 
        } else{
            //Contagem regressiva
            for(c= i; c >= f; c-= p) {
                res.innerHTML +=  `${c} \u{1F47E}`
            }
            res.innerHTML += `\u{1F47D}`
        }
        
    }

}