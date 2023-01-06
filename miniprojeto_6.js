const filme = {
    nome:'lelele',
    nubero:12,
    ano:10,
    diretor:'Luquinhas'
}
exibirApenasStrings(filme)
function exibirApenasStrings(obj){
   for(prop in obj){
    if(typeof obj[prop]==='string'){
        console.log(prop,obj[prop]);
    }
   }
}
