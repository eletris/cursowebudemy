const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!  remove o ultimo piloto do array
console.log(pilotos)

pilotos.push('Verstappen')    //adiciona um piloto na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')  // coloca no inicio da array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array gerado a partir do indice 2 ou seja pega parte do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)   //do indice 1 até o 4 mas não pega o 4
console.log(algunsPilotos2)