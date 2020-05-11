const moduloA = require('./01 moduloA')   //require serve para importar de outro arquivo no caso pegando o arquivo moduloA e B e armazenando na const
const moduloB = require('./02 moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)