for (let letra of "Cod3r") {   //percorre o valor Coder
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {   // nesse caso ele percorre por indice 
    console.log(i)
}

for (let assunto of assuntosEcma) {  //aqui percorre os valores
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {  //mostra as chaves do map
    console.log(chave)
}

for (let valor of assuntosMap.values()) {   //valores do map
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {  //ambos valores e chaves 
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}