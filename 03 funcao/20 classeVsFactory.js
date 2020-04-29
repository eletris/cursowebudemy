class Pessoa {
    constructor(nome) {     // nome é p parametro informado da função
        this.nome = nome   //o this informa que a variavel nome é global
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)   //função falar que simplesmente chama o terxto com o nome atribuido em nome
    }  // o this é importante para entender que ele precisa pegar o nome que foi definido como global
}

const p1 = new Pessoa('João')    // cria uma constante que vai colocar da class pessoa em nome o valor joão
p1.falar()  // aqui chama a função falar basenado com o valor que esta em p1

const criarPessoa = nome => { // aqui é um metodo factory que é a criação de uma função que retorna um objeto que é similar a classe criada acima
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()