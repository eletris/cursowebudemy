class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {   //que é uma função contrutora
        this.nome = nome   // onde o atributo nome dentro irá receber o mesmo valor do parametro nome que possui generico
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []   //atrbuto do tipo array
    }

    addLancamentos(...lancamentos) {     //uma função que recebera valores que serão armazenados no atributo lançamentos criando um array
        lancamentos.forEach(l => this.lancamentos.push(l))  //para cada lançamento sera colocado o valor em cada indice onde vai dar um push no array de lançamentos
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {   // para cada lançamento 
            valorConsolidado += l.valor   // fara uma atribução aditiva em valor consolidade 
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())