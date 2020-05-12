// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {  //insere o promisso com o resolv e reject quando e aceitada ou rejeitada
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))  // se der resolv
                } catch(e) {   //trata se for erro caso não seja um json
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])  //pode se passar diversas promisses e aguarado se vai dar resolv ou reject
    .then(turmas => [].concat(...turmas))   //pega todos os arrays espalhando em turmas um unico array
    .then(alunos => alunos.map(aluno => aluno.nome))  // aqui pega somente os nomes 
    .then(nomes => console.log(nomes))   //imprime somente os nomes
    .catch(e => console.log(e.message))   //tratamento de erro

getTurma('D').catch(e => console.log(e.message)) //aqui só para dar um reject 