let num = somarMultiplos(10)
function somarMultiplos(numero){
    let multiploDeTrez = 0;
    let multiploDeCinco = 0;
    for(let c = 0;c <= numero;c++){
        if(c % 3 === 0){
            multiploDeTrez += c;
        }
        else if (c % 5 === 0){  
            multiploDeCinco += c;        
        }
    }
    console.log(multiploDeCinco + multiploDeTrez)
}