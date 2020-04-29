let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)  //como o 1 será considerado inteiro colocamos a !! (negação) para determinalo como verdadeiro ou falso

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))  // || (ou) aqui como todos são falsos da verdadeiro se mudar um para valor verdardeiro da falso

let nome = ''
console.log(nome || 'Desconhecido')  //se no nome colocar vazio coloca desconehcido se colocar nome printa o nome