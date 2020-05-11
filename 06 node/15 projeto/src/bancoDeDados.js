const sequence = {   //cria um objeto que será a sequencia de id que o obj produto vai seguir
    _id: 1,   //id que é só interno desse obj começa com 1
    get id() { return this._id++ }   // quando o id for utilizado vai acrescentar +1 no _id
}

const produtos = {}   //dentro do objeto vai ter como chave o id e o valor .

function salvarProduto(produto) {    // cria a função salvar produto que vai receber o obj produto 
    if (!produto.id) produto.id = sequence.id   //se (produto não possui id)  produto id vai receber um id do obj sequence
    produtos[produto.id] = produto  //em sequencia caso produto não tenha id grava em produtos o produto e seu id
    return produto   
}

function getProduto(id) {   //cria a função que pega o produto pelo id 
    return produtos[id] || {}    // retorna o produto caso possua id senão retorna um obj vazio
}

function getProdutos() {      //retorna todos os produtos
    return Object.values(produtos)   //retorna todos os valores de produtos
}

function excluirProduto(id) {   // função de excluir produto
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }   //coloca as funções para serem acessadas de outro arquivo no caso o servidor.js