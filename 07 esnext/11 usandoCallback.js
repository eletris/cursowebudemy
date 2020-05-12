// sem promise...
const http = require('http')  //modulo node

const getTurma = (letra, callback) => {   //função que vai pegar a letra da turma e chama uma callback quando o arquivo json estiver carregado
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`  //cont da url que vai receber a letra informada
    http.get(url, res => {  //chama a função de http get que vai pegar a url e resposta que vai ser o recebemimento dos dados da url
        let resultado = ''   //cria uma string vazia

        res.on('data', dados => {  //aqui é uma trativa do recebimento dos dados que serão armazenado dentro de resultado o data é como se fosse a função de recebimento dos dados da pagina
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))  //no final da data(aquisição dos dados chama a callback que vai pegar os valores json da resposta e colocar em resultado convertidos )
        })
    })
}

let nomes = []    //cria um array que vai aramazenar os nomes dos alunos de todas as turmas
getTurma('A', alunos => {   //chama a função getTurma informando a letra e a callback alunos
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))  //vai tribuir em nomes um array criado com o map que só retorna o nome que será grava do no a
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})