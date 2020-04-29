const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {     // definine o i como indice do array notas
    if (notas[i] < 7) {    // se o i de notas for menor que 7
        notasBaixas1.push(notas[i])   // incluir no array de notas baixas os valores de notas
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {   // filter faz um filtro por metodo determinado retorna verdadeiro ou false
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)