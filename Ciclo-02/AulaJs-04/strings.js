/*var nome = "Marcelo";
console.log(nome.length);
console.log(nome[0]); //M (comprimento de 7 elementos) diferente do indice (começa c/ 0);
*/



/* match()
O método match procura uma palavra em uma string.
Existem alguns parâmetros de pesquisa que permite uma maior precisão confomre a necessidade
flags g / i / m 
*/
var palavra = "Maçã doce";

//console.log(palavra.match(/D/gi));



/* search()
O método serach() procura pela ocorrência e retornando a posição na cadeia da string, a posição é
em relação ao primeiro caractere da ocorrência.
*/

//console.log(palavra.search(/d/gi));



/* replace()
Este método substitui uma string por outra, simples assim, 
ele pesquisa a string informada, como no método “match” 
e a substitui por outra string nas aspas informada como segundo parâmetro
*/
 /*var str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."+
 "Soluta tenetur ab, numquam, harum at quos reprehenderit!"+
 " Modi culpa id, inventore, dignissimos unde voluptate minus delectus tenetur laboriosam."+
 " Impedit, magni, ab."

 //var mudarStr = str.replace('e', 'X'); //muda uma vez que encontrar a letra "e" pela letra "X";
 var mudarStr = str.replace(/voluptate/gi,'XxXxxXXXx'); //muda TODAS as letra "e" pela letra "X"
 console.log(mudarStr);*/

 

 /* localeCompare( )
O método localeCompare compara efetua a comparação entre duas strings,
se estas forem iguais o retorno será “0” zero.
O valores -1 e 1 podem ser esperados caso elas nãos sejam iguais.
*/
/*var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();

console.log(`Este é o c1: ${c1} Este é o ${c2}`); 
*/

//var comparacao = comp1.localeCompare(/comp2/gi); não são iguais por conta da letra maiúscula (1)
/*var comparacao = c1.localeCompare(c2);
console.log (comparacao);
*/



/* trim()
Faz a remoção de espaços antes e depois da string especificada.*/
 
 var p = ' fpalavra+ ';
 
 var r = p.trim();
 console.log(r);
 var s = r.replace(/f/gi,'');
console.log(s);
 var sub_a = s.replace('+',''); //remover e substituir o sinal de +
console.log(`Removido: ${sub_a}`);

/* toLocaleString() irá retornar uma string com uma representação da moeda definida 
como no parâmetro currency. P/ formatacao de moedas
*/ 
var valor = 1.357 // 1,35;
var formatarMoeda = valor.toLocaleString('pt-BR', {
	style:'currency', 
	currency:'BRL'});
console.log(formatarMoeda);
