const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {   // em produtos ira fazer um filtro que vai receber uma função callback que recebe um parametro p que sera cada um dos produtos
    return false    //se for true ele mostra tudo no filtro caso false vai retornar um array vazio ou seja vai ser um criterio ex: return p.preco > 10 
}))

const caro = produto => produto.preco >= 500   //cria uma função que vai receber um produto que retorna preço de produto que forma maior que 500
const fragil = produto => produto.fragil  // se produto for fragil

console.log(produtos.filter(caro).filter(fragil))