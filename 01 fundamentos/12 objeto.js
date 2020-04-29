const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)


const a = {coisa: 'nota'}

const b = a            //coloca o b com mesmo endereço isso e passagem por referencia

b.coisa = 'OPA'      // substitui o nota por opa

console.log(a)