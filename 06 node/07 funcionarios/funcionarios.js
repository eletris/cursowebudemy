const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'   //importa um arquivo json de um link
const axios = require('axios')  // pega a dependendia axios instalada que é um cliente http que faz requisicoes de informações de algo que esta remoto ou seja que nem o link acima que esta em um servidor externo

const chineses = f => f.pais === 'China'  //cria const chineses que recebe f de funcionarios que retorna .pais de funcionarios que é igual a china
const mulheres = f => f.genero === 'F'  // cria const mulheres que recebe a função f = funcionarios que retorna .genero do obj f que é igual F 
const menorSalario = (func, funcAtual) => {   //func que é um acumular que é o funcionario que vai ser usado no reduce e depois funcionario atual
    return func.salario < funcAtual.salario ? func : funcAtual /// retorna se o salario do funcionario for menor funcionario atual retorna o funcionario senão o funcionarioAtual ? determina a condicional de retorno 
}

axios.get(url).then(response => {   //utilizando o axios para pega o conteudo da url
    const funcionarios = response.data
    // console.log(funcionarios)

    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})


// dando init na pasta funcionario     npm init -y vc cria um arquivo package.json

// dentro da pasta funcionarios dar um npm i --save-dev axios@0.17.1 -E   instala especificamente a versão do axios 
// que ira criar o node_modules e uma dependencia chamada axios isso tudo é informado dentro do packages.json

//o package-lock.json especifica exatamente as versoes utilizadas no projeto