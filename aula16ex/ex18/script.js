let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // Vetor

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { // Se o número for maior ou igual a 1 e menor ou igual a 100...
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {// Se o valor não for encontrado na lista
        return true
    } else {
        return false
    }
    
} 

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // Se o valor for um número e não estiver na lista...
        valores.push(Number(num.value)) // Adicionar o número dentro do vetor

        // Adicionando esse número no select
        let item = document.createElement('option') // Criando um elemeno option no select
        item.text = `Valor ${num.value} adicionado` // Inserindo texto no option
        lista.appendChild(item) // Adicionando esse option na lista(variavel do select)
        res.innerHTML = '' // Quando adicionar um elemento o resultado fica vazio
    } else {
        window.alert('Valor inválido ou encontrado na lista')

    }
    num.value = '' // Apagando o número que foi digitado
    num.focus() // Mandando o foco ao num(variavel do input)
}

function finalizar() {
    if (valores.length == 0) { // Se nenhum número for adicionado...
        window.alert('Adicione valores para poder finalizar')
    } else {
        let tot = valores.length // O total é igual ao número de elementos
        let maior = valores[0] // o maior número, no momento, é o que está na posição 0
        let menor = valores[0] // o menor número, no momento, é o que está na posição 0
        let soma = 0
        let media = 0
        
        for(let pos in valores) { // Para cada posição em valores...
            soma += valores[pos] // Soma = soma + valores[pos]
            if (valores[pos] > maior) { // Se o valor na posição X for maior que o maior valor...
                maior = valores[pos]
            }
            if (valores[pos] < menor) { // Se o valor na posição X for menor que o menor valor...
                menor = valores[pos]
            }
        }
        media = soma / tot // A média é igual a soma dos valores dividido pelo total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos <strong>${tot}</strong> números cadastrados </p> `
        res.innerHTML += `<p> O maior valor foi <strong>${maior}</strong> </p>`
        res.innerHTML += `<p> O menor valor foi <strong>${menor}</strong> </p>`
        res.innerHTML += `<p> A soma de todos os valores é igual a: <strong>${soma}</strong> </p>`
        res.innerHTML += `<p> A média dos valores é igual a: <strong>${media}</strong> </p>`
    }
}