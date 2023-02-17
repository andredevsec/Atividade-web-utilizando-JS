function carregar() {
    var msg = window.document.getElementsById(`msg`)
    var img = window.document.getElementsById(`imagem`)
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        //bomdia
        img.src = `manha.jpg`
        document.body.style.background = 'red'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = `tarde.jpg`
        document.body.style.background = 'blue'
    } else {
        //boa noite
        img.src = `noite.jpg`
        document.body.style.background = 'black'
    }
}