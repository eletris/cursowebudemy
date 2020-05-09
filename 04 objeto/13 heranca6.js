function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)    // cria uma const que instacia a função aula informando o nome e videoid
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new criando essa função que realiza a mesma coisa
function novo(f, ...params) {   // onde o f sera a função Aula e ... que é uma função split que recebe valores e coloca como se foçe um array dos parametros informados
    const obj = {}   // será criado um obj vazio
    obj.__proto__ = f.prototype  // aqui define que o obj vazio terá o o _proto apontando para o prototype da função principal (pai/construtora)
    f.apply(obj, params)   //como se fosse o this com os parametros de Aula que vai pegar os params (que é o array com os parametros) do obj
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)   // no caso cria a contante que recebe a função novo(que simula o new), informando a função Aula  e os parametros nome e id
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)