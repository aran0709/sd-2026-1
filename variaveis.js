const readline = require("readline")
/* 
- Variaveis em JavaScript são Case-Sensitive nome e Nome são variaveis diferentes
- Variaveis em JavaScript tem suporte ao UNICODE ou szeja elas podem conter carcteres acentuados e emnojis
*/
//nome_complet snake case
// nomeCompleto camelCase
//NomeCompleto PascalCase

//Declaração de variaveis

// var  nome =  "João" // var não é indicado porque ele vaza o escopo deonde foi declarado geradno erros e confusão no codigo

// let sobrenome = "monteiro"// o mais indicado rigido na sua declaração e acesso , ele não pode ser recriado mas pode ser alterado , e não pode ser acessado fora do bloco onde foi criado

// const idade = 23 // variavel constate não pode ser declarado novamente e não pode ser alterado o seu valor, tabm segue a regra de ser acessado apenas no bloco onde foi declarado.

// console.log(x)
// var x = 10


////////////////////////////////////////////////////////////////////
//COMVERSÃO TIPOS DE DADOS
///String para tipos de Number diferentes
let num = Number("42")//convertendo a String para NUMBER    
let float = parseFloat("3.14")//Convertendo String para FLoat
let inteiro = parseInt("10.5")//Convertendo Strig para Int

//Tranformando numero em String
let str = String(100)//Tranformando Inteiro em String
let str2 = (12.5).toString// Transformando numero de ponto flutuante em String

//Transformando boolean em numero
console.log(Number(true))//1
console.log(Number(false))//0



console.log(inteiro)
console.log(num)
console.log(float)

///////////////////////////////////////////////////////////////
//LITERAIS EM JAVAsCRIPT

let texto ="isso é uma string"
console.log("String literal")

let tamplet = `ola , ${nome}`


