

/*
1º Aula de Js - 16/08/2021

- vars 
*/

/*
var nome =(recebe) "Diogo"; // nome disso é string

console.log( typeof(nome) ) // vai gerar uma saída de dados que foi criada [imprime o nome da string (Diogo)]

var nome = "12"; //number

console.log( typeof(nome) ) // vai informar se é um número inteiro ou string no f12

//concatenar (+) valores/string
document.write("Idade" + nome + "<br>"); // document diz respeito ao próprio documento html vai aparecer no navegador
*/

//
var fruta = "Laranja";
var oque = "doce";
var tudoJunto = fruta+" "+oque

//console.log (tudoJunto);
//parseInt p/ numero inteiro e parseFloat p/ numero decimal vão analisar se o valor entre aspas é de fato uma string true ele vai somar
//aritmeticos
var valor1 = '2';
var valor2 = 2;
var total = valor1 + valor2;

document.write(total); //saindo no html
console.log(valor1-valor2); //console do navegador

var i = 2;
var j = 2;

console.log(i%j); // modulo ou resto da divisao

var x = 3;
var y = 2;

console.log(x*y)// multiplicando

//comparadores
var v = (valor1 == valor2 ); /* == é quando eu quero comparar se 2 valores são iguais*/
console.log(v);

var v = (valor1 === valor2 ); /* === é quando eu quero saber se 2 valores sao realmente identicos*/
console.log(v);
