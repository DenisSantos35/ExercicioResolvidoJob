let palavra = 'Denis Diogo dos Santos'
let envertendoPalavra = []

for(let i = 0; i < palavra.length; i++){
    console.log(palavra[i])
    envertendoPalavra.unshift(palavra[i])
}

let palavraInvertida = ""
for(let i of envertendoPalavra){
    palavraInvertida = palavraInvertida + i
}

console.log(palavraInvertida)