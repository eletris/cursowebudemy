console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1  //é visivel fora do arquivo as 3 opções
exports.b = 2
module.exports.c = 3

exports = null  //tbm não muda o modele.exports
console.log(module.exports)

exports = {  //não muda o module exports
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }