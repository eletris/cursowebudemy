
function real(partes, ...valores) {   // cria um afunção que recebe valores
    const resultado = []  // cria um array que armazena o svalores
    valores.forEach((valor, indice) => {  // para cada valor informado pega o valor e seu indice e aplica a seguinte função
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`  // se valor não for um numero retorna valor se for atribui o R$ e fixa para 2 casas decimais
        resultado.push(partes[indice], valor)  // o resultado armazena em resultado referenciando a parte com indice e o valor
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)