function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)    // cria uma const que instacia a função aula informando o nome e videoid
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new criando essa função que realiza a mesma coisa
function novo(f, ...params) {   // onde o f sera a função Aula e ... que é uma função split que recebe valores e coloca como se foçe um array dos parametros informados
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)