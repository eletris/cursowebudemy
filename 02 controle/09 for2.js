const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {   // no caso coloca em i o valor do indice no qual esta em array de notas
    console.log(i, notas[i])    // mostra o valor do indice e depois a nota do indice
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)  // mostra o atributo depois conteudo do atributo
}