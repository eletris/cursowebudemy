Array.prototype.map2 = function(callback) {  //funcionameto interno do map
    const newArray = []     //cria un novo array vazio
    for (let i = 0; i < this.length; i++) {    // percorre todos os valores do array original
        newArray.push(callback(this[i], i, this))   //para cada elemento percorrido ele da um push em new array informando valor indice e array
    }
    return newArray  //e retorna new array
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)  //então esse map 2 é o map criado
console.log(resultado)