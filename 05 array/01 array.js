console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')   //new função array que cria um objeto
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']  // notação literal
console.log(aprovados[0])   // busca pelo indice
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'   // adicção no indice informaddo
aprovados.push('Abia')    // adiciona outro valor no array
console.log(aprovados.length)   // quantidade de indices preenchidos

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()   // ordena o array
console.log(aprovados)

delete aprovados[1]   //deleta o atributo mas não reordena os indices
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)  // primeiro escolhe o indice segundo quantidade de excluidos caso queira adiconar colocar o segundo parametro com zero e colocar separdo por virgula em sequencio o que sera adicionado
console.log(aprovados)