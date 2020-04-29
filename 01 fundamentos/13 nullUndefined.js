let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)   
console.log(produto)           //foi setado preço vai dar undefined

produto.preco = 3.50
console.log(produto)          // aqui adiciona valor no preço de  produto

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco    se quiser remover o atributo
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)