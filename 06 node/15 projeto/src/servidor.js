const porta = 3003

const express = require('express')  //importação do express que esta dentro no node_modules
const app = express()   // a função expresse é instanciada dentro de app
const bodyParser = require('body-parser')  //exporta o bady parser instalado com o npm que serve para que o ao dar post ele consiga gerar o json com os dados
const bancoDeDados = require('./bancoDeDados')  //importa as funções do banco de dados

app.use(bodyParser.urlencoded({ extended: true }))  //no postman enviamos em urlencoded então é necessaria a utilização do bodyParser

app.get('/produtos', (req, res, next) => {   //pega a função get de app informando a requisição, resposta e next de uma função de middleware, que retorna de resposta vai dar a função send de inviar  
    res.send(bancoDeDados.getProdutos())  // vai dentro de resposta(res) usa um send que vai pegar do arquivo de bancodedados a função getProdutos()
})

app.get('/produtos/:id', (req, res, next) => {   //que vai pegar o que foi informado na url /produtos   então é um request
    res.send(bancoDeDados.getProduto(req.params.id))   //pega o que foi definido na url no caso o param id
})

app.post('/produtos', (req, res, next) => {  //que sera para salvar ou dar um post que é salvo no corpo da requisição por isso utilizar o req
    const produto = bancoDeDados.salvarProduto({  // dentro de produto pega a função de salvarProduto dentro do arquivo de bancoDeDados
        nome: req.body.nome,     // atributo que será gravado
        preço: req.body.preço    // atributo que será gravado em produto
    })
    res.send(produto) // resposta que vem do banco de dados
})

app.put('/produtos/:id', (req, res, next) => {   // já informando o id do produto no link
    const produto = bancoDeDados.salvarProduto({   //com o put serve como um update na inserção de dados
        id: req.params.id,   // onde é necessario informar o id de onde será alterado e no postman selecionar a opção de put
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)  //aqui só retorna a porta que esta sendo utilizada
})


//antes foi instalado o npm init que vai criar o node_modules tbm foi instalado o npm i --save express@4.16.2 -E   que é do express

//é interessante ir em package.json colocar como main o arquivo src/servidor.js e em script "start": "nodemon", lembrando de dar o npm -i --save nodemon@1.14.11 -E

//antes instalar tbm o npm i --save body-parser@1.18.2 -E   que faz comunição do servidor para obj

//no postman send no http://localhost:3003/produtos vc ve que tem um objeto vazio 

//com o post indo em body depois x-www-form-underloded