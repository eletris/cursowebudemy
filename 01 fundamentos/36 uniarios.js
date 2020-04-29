let num1 = 1
let num2 = 2

num1++           //pos fixadas
console.log(num1)
--num1     //prefixada aqui da uma prioridade no calculo
console.log(num1)

console.log(++num1 === num2--)   //aqui da igual pq ele só faz o -- depois da operação
console.log(num1 === num2)