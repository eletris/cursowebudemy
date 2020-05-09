const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)  // a cosntante filha ira assumir as caracteristicas do obj pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)   //ira pegar o cabelo preto de pai

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }  //outro parametro que sera o nome que já possui o valor que não é mudado e ser listado
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)  // vai manter o nome bia pois foi writable:false

console.log(Object.keys(filha1))  // lista as chaves campos de cada obj no caso filha só tem nome a cor de cabelo vem do pai
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?   // informa qual chave e do proprio obj ou se vem de um pai
        console.log(key) : console.log(`Por herança: ${key}`)  // define o que vem de herança
}