"use strict";
// ___________________________________________________________________
// EXEMPLO 1
// let informacao: any 
// informacao = "Informação é a alma do negocio"
// console.log(`Informação = ${informacao}`)
// informacao = 2
// console.log(`Informação = ${informacao}`)
// informacao = true 
// console.log(`Informação = ${informacao}`)
// const n1 = 2
// ___________________________________________________________________
// EXEMPLO 2
// var n1 = 2
// var n2 = 0
// if(n1 > 0){
//     n2 = 100
// }
// console.log (n2)
// console.log (n1)
// ___________________________________________________________________
// EXEMPLO 3
// n1 = 1
// var n1: number  //posso declarar a variavel em qualquer lugar
// n2 = 2
// let n2: number   //let tem que ser dlecarado antes de usar a variavel 
// ___________________________________________________________________
// EXEMPLO 4
function testeVar(input) {
    var a = 100;
    var b; //indefinido
    if (input) {
        b = a + 1; //numerico
    }
    return b;
}
