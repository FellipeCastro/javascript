let vetores = [8, 1, 7, 4, 2, 9]
vetores.sort()

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


for(let pos = 0; pos < vetores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}
*/

for(let pos in vetores) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}