const escola = "Cod3r"

console.log(escola.charAt(4))   //vai dar a letra que esta no indice 4 lembrando que indice começa com 0
console.log(escola.charAt(5))   //mostra que não achou nada no indice
console.log(escola.charCodeAt(3))  //pega o valor do indice e fala qual o numero dele na tabela unicode html ASC
console.log(escola.indexOf('3'))  //dentro da palavra pega o valor e informa o indice em que ele se encontra

console.log(escola.substring(1))  //vai imprimir do indice 1 para frente
console.log(escola.substring(0, 3))  // vai do indice 0 até antes do indice 3 sem incluir ele

console.log('Escola '.concat(escola).concat("!"))  //concatenar os valores
console.log('Escola ' + escola + "!")  // igual o de cima
console.log(escola.replace(3, 'e'))  //substitui o valor do indice 3 pela letra informada

console.log('Ana,Maria,Pedro'.split(',')) //cria array com os 3 elementos separando por ,