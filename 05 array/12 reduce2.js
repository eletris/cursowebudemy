const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista  //cria uma função que recebe o resulta e o atributo que vai ser verificado => onde a condição e se o resultado é bolsista. utilizando &&
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))  //onde alunos.map primeiro acumula os resultados de bolsista em a com o reduce verifica a regra imposta em todosBolsistas.

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista  //
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))