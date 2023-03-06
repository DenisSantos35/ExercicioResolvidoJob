//Para chegar  a conclusao foi feito o calculo real de quantos km por horas estaria o carro de ribeirao abatendo os 10 minutos
//foi transformado em km por minuto tanto para o carro de franca como para ribeirao
//apartir dai a logica foi que eles se cruzariam no momento em que a soma dos 2 carros fossem igual ou maio que 100km
//neste exato momento o carro de franca abateu se o valor que faltava chegar a ribeirao e
// o carro de ribeirao verificou a distancia que ja se havia percorrido
// fez se uma comparacao de qual valor era menor a distancia do carro de franca para ribeirao ou a distancia percorrida do de ribeirao para franca.
//reposta o carro de franca estaria maisprocimo de ribeirao
let caminhaoRibeirao = 110 - (((110 / 60)) * 10)
caminhaoRibeirao = caminhaoRibeirao / 60
let carroFranca = (80 / 60)
let somaCaminhaoRibeirao = 0;
let somaCarroFranca =0;
for(let i =0; i <= 100; i++){
    somaCarroFranca += carroFranca
    somaCaminhaoRibeirao += caminhaoRibeirao
    if(somaCarroFranca + somaCaminhaoRibeirao >= 100){
        somaCarroFranca = 100 - somaCarroFranca       
        if(somaCarroFranca < somaCaminhaoRibeirao){
            console.log(`O carro de franca falta para chegar a ribeirao ${somaCarroFranca}`)
            console.log(`O carro de ribeirao andou a distancia de: ${somaCaminhaoRibeirao}`)
            console.log('O carro de Franca esta mais procimo de ribeirao')
            break
        }else{
            console.log(`O carro de franca falta para chegar a ribeirao ${somaCarroFranca}`)
            console.log(`O carro de ribeirao andou a distancia de: ${somaCaminhaoRibeirao}`)
            console.log('O carro de Ribeirao esta mais procimo de ribeirao')
            break
        }
    }
    
    
}
