const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {         // dentro da function vai lembrar o valor de i salvo no momento pois o i esta no escopo de bloco
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()