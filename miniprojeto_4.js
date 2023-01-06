//Medidor de Velocidade
//Velocidade Maxima de até 70
// a cada 5km a cima do limite voce ganha 1 ponto na carteira;
// Math.floor()
// Pontos > 12 => carteira suspendida

let verificador = verificarVelocidade(150);

function verificarVelocidade(vel){
    const velocidadeMaxima = 70;
    if(vel <= velocidadeMaxima){
        return console.log('Tudo ok!')
    }
    else{
        const pontos = Math.floor(((vel-velocidadeMaxima) / 5));
        console.log(`${pontos} pontos na carteira`);
        if( pontos > '12'){
            return console.log('Carteira suapensa')
        }
    }
}
