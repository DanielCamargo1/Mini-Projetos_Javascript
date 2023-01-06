//Escreva uma função que receba 3 números e retorne o maior entre eles;
let valorMaior= maxNumber(10,10)
function maxNumber(numero1,numero2){
    if(numero1 > numero2){
        return console.log('O primeiro número é maior')
    } else if(numero1 == numero2){
        return console.log('São iguais')
    } else {
        return console.log('o segundo número é maior')
    }
}