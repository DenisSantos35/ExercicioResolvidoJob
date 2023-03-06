//Resposta questao 3
//A)
let a = [1,3,5,7]
let resposta = (a[1] - a[0]) + a[3]
a.push(resposta)
console.log(a)

//B)
let b = [2,4,8,16,32,64]
let respostab = b[5] * 2
b.push(respostab)
console.log(b)

//C)
let c = [0,1,4,9,16,25,36]
let respostac = ((c[6] - c[5]) + 2) + c[6]
c.push(respostac)
console.log(c)

//D)
let d = [4,16,36,64]
let respostad = ((d[3] - d[2]) + 8) + d[3]
d.push(respostad)
console.log(d)

//E)
let n1 = [];
    n1[0] = 0;
    n1[1] = 1;
    for(let i = 2; i < 8; i++){
        n1[i] = n1[i - 2] + n1[ i - 1]
    }
console.log(n1)

//F)
let f = [2,10,12,16,17,18,19]
//relacao entre os numeros todos começao com a letra d
let respostaf = 200;
f.push(respostaf);
console.log(f)