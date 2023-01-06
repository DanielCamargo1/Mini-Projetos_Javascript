// Números Primos;
exibireOsNumerosPrimos(5)
function exibireOsNumerosPrimos(limite){
    for(let c = 2 ; c <= limite; c++){
        let ehPrimo = true;
        for(let div = 2; div < c; div++){
            if(c % div === 0){
                ehPrimo = false;
                break;
            }
        }
        if(ehPrimo){
            console.log(`O número ${c} é primo `)
        }
    }
}