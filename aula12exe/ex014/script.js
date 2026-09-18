function carregar() {
    var msg = document.getElementById("conteudo")
    var img = document.getElementById("foto")
    
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerText = `Agora são ${hora}`
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/manha.jpg"
        document.body.style.backgroundColor = "#cbdddd"
        
    } else if (hora >= 12 && hora < 18) {
        img.src = "imagens/tarde.jpg"
        document.body.style.backgroundColor = "#c07c27"
    } else {
        img.src = "imagens/noite.jpg"
        document.body.style.backgroundColor = "#292522"
    }
}








