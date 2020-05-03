const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))   //transforma o obj em json mas ignora a função. Json não realiza programação é só um conteudo textual

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))   //json para obj
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))