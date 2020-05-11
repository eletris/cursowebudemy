module.exports = function(...nomes) {   // em module cria uma função que vai receber diversos nomes 
    return nomes.map(nome => `Boa semana ${nome}!`)// e para cada nome faz um map novo array com boa semana e o nome
}