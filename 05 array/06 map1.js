const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {  //passou o array para o map que vai chamar uma callback que vai pegar cada elemento do array e retornar o dobro isso armazenado em resultado
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10   //uma função que recebe um elemento e retorna o valor do elemento + 10
const triplo = e => e * 3  //recebe o elemento e retorna ele x 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`   // que recebe o eletemento e converte em reais

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)  //chama as funções em sequencia
console.log(resultado)