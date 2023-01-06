// FIZZBUZZ
// DIVISÍVEL POR 3 => FIZZ
// DIVISÍVEL POR 5 => BUZZ
// DIVISÍVEL POR 3 E 5 => FIZZBUZZ
// NÃO DIVISÍVELPOR 3 AND 5 => ENTRADA
// NÃO É NUMBER

let num = fizzbuzz(15)

function fizzbuzz(entrada){
    if (entrada % 3 === 0 && entrada % 5 === 0){
        return console.log('FizzBuzz');
    }else if(entrada % 3 === 0){
        return console.log('Fizz');
    } else if(entrada % 5 === 0){
        return console.log('Buzz');
    } else if (typeof entrada !== 'number'){
        return console.log('Nãoé um número');
    } else{
        return console.log(number)
    }
}
