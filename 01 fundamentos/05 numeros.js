const peso1 = 1.0             //vai determinar que é inteiro se mudar para 1.1 não é
const peso2 = Number('2.0')    //mesma coisa se colocar '2.0'

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))  //relata se o peso1 um é um numero inteiro
console.log(Number.isInteger(peso2))  //relata se o peso2 um é um numero inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))     //mostra a quantidade de casas no resultado
console.log(media.toString(2)) // em binário
console.log(typeof media)     //mostra o tipo da constante media
console.log(typeof Number)    // mostra que o tipo de Number na verdade é uma função