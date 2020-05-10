const moduloA = require('../../01 moduloA')   //esse arquivo esta na pasta b então ../ para sair da pasta B e vai para A depois ../ que sai da pasta A e vai para pasta node onde esta o arquivo moduloA
console.log(moduloA.ola)

const saudacao = require('saudacao')  //aqui vai importar um modulo criado em node_modules chamado saudação que contem o arquivo index.
console.log(saudacao.ola)

const c = require('./pastaC')  //importa da pasta c o index
console.log(c.ola2)  // informa o c com o atributo ola2

const http = require('http')   //http já é um modulo interno do node
http.createServer((req, res) => {  // cria um serv http que tera como param uma requisição, resposta e uma callback 
    res.write('Bom dia!')  //dentro da calback coloca na resposta um função de escrita informado o bom dia 
    res.end()   // e tera uma função end dentro de res
}).listen(8080)   //porta no navegador que vai rodar isso
