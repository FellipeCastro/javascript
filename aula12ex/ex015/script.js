function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //Colocando imagem pelo Js
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                // Idosa
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        // Imagem ficou torta
        res.appendChild(img)
        
    }
}