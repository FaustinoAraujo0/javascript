function tabuada () {
    var num = document.getElementById("txtn").value
    var tab = document.getElementById("seltab")

    if (num.length == 0) {        
        window.alert("Por favor, Digite um número")
    } else {
        var n = Number(num)
        tab.innerHTML = ''
        for (var c = 1; c <= 12; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}