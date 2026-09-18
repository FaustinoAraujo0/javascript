function contar () {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('ifim').value
    var passo = document.getElementById('ipasso').value
    var res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        //window.alert("[ERRO] Falta Dados!")
        res.innerHTML = "Não é possível calcular!"
    } else if (Number(passo) <= 0) {
        window.alert("Passo invalido, Considerando passo 1")
        passo = 1

        res.innerHTML = 'Contando: <br>'

         if (Number(inicio) < Number(fim)){
            for (var i = Number(inicio); i <= Number(fim); i += Number(passo)){
                res.innerHTML += `${i}👉 `
                if (i == Number(fim)) {
                    res.innerHTML += `🏴󠁧󠁢󠁮󠁩󠁲󠁿`
                }
            }
        } else {
            for (var i = Number(inicio); i >= Number(fim); i -= Number(passo)){
                res.innerHTML += `${i}👉 `
                if (i == Number(fim)) {
                    res.innerHTML += `🏴󠁧󠁢󠁮󠁩󠁲󠁿`
                }
            }
        }

    } else {
        res.innerHTML = 'Contando: <br>'

        if (Number(inicio) < Number(fim)){
            for (var i = Number(inicio); i <= Number(fim); i += Number(passo)){
                res.innerHTML += `${i}👉 `
                if (i == Number(fim)) {
                    res.innerHTML += `🏴󠁧󠁢󠁮󠁩󠁲󠁿`
                }
            }
        } else {
            for (var i = Number(inicio); i >= Number(fim); i -= Number(passo)){
                res.innerHTML += `${i}👉 `
                if (i == Number(fim)) {
                    res.innerHTML += `🏴󠁧󠁢󠁮󠁩󠁲󠁿`
                }
            }
        }
    }
   
}