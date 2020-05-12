function falarDepoisDe(segundos, frase) {  //cira a função que recebe segundos que serão contados para iniciar a frase
    return new Promise((resolve, reject) => {  //vai retorna a promisse que tem parametros(funções de resolve caso aprovado  e reject se der erro) 
        setTimeout(() => {    //só para dar um delay que pega os segundos
            resolve(frase)   //caso de resaolve informa a frase  ****
        }, segundos * 1000)   // tempo do delay
    })
}

falarDepoisDe(3, 'Que legal!')   //passa os segundos e a frase
    .then(frase => frase.concat('?!?'))   //o then significa que deu resolve 
    .then(outraFrase => console.log(outraFrase))  //encadeia outra operação
    .catch(e => console.log(e))   // aqui caso de erro só mostra a frase isso se for colocado reject em frase ****