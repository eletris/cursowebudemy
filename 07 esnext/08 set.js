// não aceita repetição/não indexada
const times = new Set() //cria um set
times.add('Vasco')   //atribui valores
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')  //não atribui repetidos

console.log(times)  //mostra os valores
console.log(times.size)
console.log(times.has('vasco'))   // possui vasco? mas ta minusculo não lê
console.log(times.has('Vasco'))
times.delete('Flamengo')   //deleta
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)  //passando valores do array para um tipo set
console.log(nomesSet)