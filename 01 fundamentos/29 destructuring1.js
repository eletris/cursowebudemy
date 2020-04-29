// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa   // destruturação tira do obj pessoa as chaves nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa   //aqui cria uma variavel chamada n que recebe nome e i que recebe idade
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa   //valores que não tem em pessoa vai voltar undefined no caso de bem humorada colocado um valor padrao
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa  // pega somente itens dentro de endereço
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)