// coleção dinâmica de pares chave/valor
const produto = new Object   //criação de um objeto
produto.nome = 'Cadeira'   //inclusão
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)   // irá mostrar o conteudo do objeto
delete produto.preco     // pode esxcluir o conteudo do objeto
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {   // objeto dentro do objeto
        nome: 'Raul',
        idade: 56,
        endereco: {   //outro obejeto
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{   // array de objetos
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000   // é possivel mudar os atributos internos dos obejtos
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)