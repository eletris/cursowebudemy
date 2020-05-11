const anonimo = process.argv.indexOf('-a') !== -1  
// console.log(anonimo) caso no terminal vc chame o arquivo indormando o parametro -a exemplo: node entradaESaida.js -a

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')  // retorna fala anonimo utilizando o exemplo com -a
    process.exit()   //para terminal o uso
} else {
    process.stdout.write('Informe o seu nome: ')   //mostra uma mensagem que solicita a inserção de dados caso não use o -a
    process.stdin.on('data', data => {  //chama uma função de inserção 
        const nome = data.toString().replace('\n', '')  //vai armazenar o que foi escrito em nome que converte em string e com replace substitui o enter do teclado \n por um valor ' '(vazio).

        process.stdout.write(`Fala ${nome}!!\n`)  //mostra o que foi escrito que esta armazenado em nome
        process.exit()  //interrompe o processo
    })
}