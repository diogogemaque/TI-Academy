var nome = prompt("Fala Jovem, digite seu nome");

document.write("Seja Bem Vindo..: "+ nome + "<br>");

var numero = prompt(nome+"," + " " + "digite um número");

document.write("Você digitou o número..: (" +numero+ ")<br>");

var respBool = (nome != numero);

respBool = confirm ("Click em ok")

console.log(respBool);
document.write("O retorno da comparação booleana é..: " + respBool + "<br>");

var valor1 = parseInt(numero);
var valor2 = parseInt(numero);
var soma = (valor1+valor2);
var subtracao = (valor1-valor2);
var resto = (valor1%valor2);
var quadrado = (valor1**2);


document.write("A soma dos valores é..: " + soma + "<br>");
console.log(soma);

document.write("A subtração dos valores é..: " + subtracao + "<br>");
console.log(subtracao);

document.write("A resto dos valores é..: " + resto + "<br>");
console.log(resto);

document.write("A quadrado dos valores é..: " + quadrado + "<br>");
console.log(quadrado);