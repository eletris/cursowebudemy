const funcs = []    // cria um array

for (var i = 0; i < 10; i++) {
    funcs.push(function() {       //incrementa no array a uma função naõ declarada
        console.log(i)        //imprime dentro de uma função no indice que esta o i o valor dele 
    })
}

funcs[2]()   // procura no array baseado no indice informado e retorna o que esta na função function
funcs[8]()   // aqui o valor de i sempre será sobreposto pois foi como o i saiu do bloco (10)