function getInteiroAleatorioEntre(min, max) {         //recebe os valores min e max
    const valor = Math.random() * (max - min) + min    // gera aleatorio entre 0 até 1(exemplo) 10 -(-1) = 11 + -1 = 10 * 0(se der zero) + -1 = -1
    return Math.floor(valor)                            //  se for 0,2   0,2 x 10 -(-1) + -1  11 x 0,2 = 2,2
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')