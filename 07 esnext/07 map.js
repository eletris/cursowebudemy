const tecnologias = new Map()   //instancia tecnologia como new map como obj gerado por map
tecnologias.set('react', { framework: false })   // com o set vc atribui em react o atributo framework
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)  //vc não consegue acessar o atributo dessa forma como se fosse um obj
console.log(tecnologias.get('react').framework)  // forma de acessar o atributo

const chavesVariadas = new Map([  //diferente do obj vc consegue definir uma chave como function obj ou numero
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {   //o forEach percorre vendo primeiro o valor depois o chave
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))  //o has informa se o valor esta contido em chavesVariadas
chavesVariadas.delete(123)   //remove o item dentro do map
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)   // quanto elemento há no map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)   //não pode ter chaves duplicadas nesse caso o 123 vai ficar com o ultimo valor informado