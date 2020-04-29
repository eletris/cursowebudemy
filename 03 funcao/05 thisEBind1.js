const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)  //this que pega o valor dentro da sudação do obj pessoa
    }
}
pessoa.falar()    //pega do obj pessoa a função falar




const falar = pessoa.falar   //não funciona
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)   //o bind define o this para de qual obj (pessoa) será essa função falar
falarDePessoa()