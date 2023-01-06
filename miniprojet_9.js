// Função de que exibe os asteriscos

exibirAsteriscos(3)
function exibirAsteriscos(valor){
    let exib = '';
    for(let c = 0; c <= valor; c++){
        exib += '*';
        console.log(exib)
    }
}