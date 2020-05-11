const schedule = require('node-schedule') //importa a lib node-schedule

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {  // onde entre ' ' esta uma forma de escrita do tipo cron com data e horario vai executar a função a seguir
    console.log('Executando Tarefa 1!', new Date().getSeconds()) //mostra a execução da tarefa pegando instanciando sempre o objeto novo com a data .pegando os segundos
})

setTimeout(function () {  //função para encerrar uma tarefa
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')   
}, 20000)  //quando vai encerrar a tarefa

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()  // cria uma regra de funcionamento da tarefa
regra.dayOfWeek = [new schedule.Range(1, 5)]  // dias da semana que vai funcionar no caso de segunda a sexta 
regra.hour = 12   // começando as 12 horas
regra.second = 30   // no segundo 30

const tarefa2 = schedule.scheduleJob(regra, function () { //funciona igual a tarefa um mas utilizando a regra de funcionamento.
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})


//instalar o npm i node-schedule@1.3.0 -E