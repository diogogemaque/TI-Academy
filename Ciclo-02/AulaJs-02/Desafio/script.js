var nome = prompt("Fala Jovem, digite seu nome");

document.write("Seja Bem Vindo..: "+ nome + "<br>");

var numero = prompt(nome+"," + " " + "digite um número");
console.log(typeof numero);
document.write("Você digou o número..: ("+numero +")<br>");

var resposta = (nome != numero);
alert ("A string "+numero+" foi enviada")
alert ("A string "+numero+" será convertida em número")

console.log(resposta);
document.write("O retorno da comparação booleana é..: " + resposta + "<br>");

var valor1 = parseInt(numero);
var valor2 = parseInt(numero);
var soma = (valor1+valor2);
var subtracao = (valor1-valor2);
var resto = (valor1%valor2);
var quadrado = (valor1**2);

console.log(typeof valor1+";"+" "+typeof valor2);

document.write("A soma dos valores é..: " + soma + "<br>");
console.log(soma);

document.write("A subtração dos valores é..: " + subtracao + "<br>");
console.log(subtracao);

document.write("A resto dos valores é..: " + resto + "<br>");
console.log(resto);

document.write("A quadrado dos valores é..: " + quadrado + "<br>");
console.log(quadrado);

var fruta=prompt(nome+" as frutas para sua sobremesa são: Laranja, Uva, Pera e Manga. Selecione somente uma fruta");

switch (fruta) {
	
	case "Laranja":
		console.log("Feito");
		document.write(nome+ " a fruta da sua sobremesa é: "+fruta);

	break;

	case "Uva":
		console.log("Feito");
		document.write(nome+ " a fruta da sua sobremesa é: "+fruta);
	break;

	case "Pera":
		console.log("Feito");
		document.write(nome+ " a fruta da sua sobremesa é: "+fruta);
	break;

	case "Manga":
		console.log("Feito");
		document.write(nome+ " a fruta da sua sobremesa é: "+fruta);
	break;

	default:
		console.log("Não");
		alert (nome+" a fruta escolhida não está disponível") 
	break;
}; 