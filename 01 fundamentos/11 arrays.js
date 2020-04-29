const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])  //mostra os valores dos indices informados. 
console.log(valores[4])

valores[4] = 10  //coloca o valor no indice que não foi informado anteriormente.
console.log(valores)
console.log(valores.length)  //quantos elementos tem no array 5

valores.push({id: 3}, false, null, 'teste')  // push adiciona os valores informados
console.log(valores)

console.log(valores.pop())  //pop tira o ultimo valor da array
delete valores[0]   // tira o valor do indice do array
console.log(valores)

console.log(typeof valores)  // mostra que o array é do tipo object 