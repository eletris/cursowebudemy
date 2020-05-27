const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))  // prover os conteudos staticos os arquivos html da pasta pelo express
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.listen(8080, () => console.log('Executando...'))