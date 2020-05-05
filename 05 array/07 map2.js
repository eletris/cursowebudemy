const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)  // converte json para obj
const apenasPreco = produto => produto.preco  //aramzena na const apenas os preços do obj

const resultado = carrinho.map(paraObjeto).map(apenasPreco)  //chama primeiro para a conversão de json para obj depois da outro map para pega somente os preços
console.log(resultado)