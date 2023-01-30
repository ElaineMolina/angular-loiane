var minhaVar = 'minha variavel'

function minhaFuncao(x: any,y: any){
    return x + y;
}


let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});

numeros.map(valor => valor * 2);

class Matematica {
    soma(x: any,y: any){
        return x + y;
    }
}