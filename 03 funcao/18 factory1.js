// Factory simples  que é um acriação de um objeto a partir de uma função
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())