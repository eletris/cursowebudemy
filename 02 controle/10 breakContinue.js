const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)   // mostra o indice e seu elemento no array
}

for (y in nums) {
    if (y == 5) {
        continue                //interrompe a execução atual e vai para a proxima inves de mostrar o indice 5 e vai direto para o 6
    }
    console.log(`${y} = ${nums[y]}`)    //${y} converte em template string
}

externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo   // brak rotulado que vai para o for mais externo que tem o rotulo
        console.log(`Par = ${a},${b}`)
    }
}