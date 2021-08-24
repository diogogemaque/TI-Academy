function soma(){
	var x=1;
	var y=2;
	console.log (x+2);
} 

//soma(); 

function somaPar(x, y){
	var r = x+y;
	console.log(r);
}

function mult(n, o) {

	var resultado = (n * o); //vars locais (sig que a var so pode ser utilizado dentro do esccopo da linha 16 até a linha 18)
	console.log(resultado);

}

function pot(n, o) {

	var resultado = Math.pow(n,o);
	console.log(resultado);
} 

mult(3,4);
pot(7,2);

//somaPar(4, 9);

/*(function respostaF() {
	var nome="Marcelo";
	alert(nome);
	return nome;
}) ();*/

/*var f = function(){
	alert("Função sem nome");

}*/
//funcao anonima a var f executa a funcao;

 //f();
//var d = respostaF();



// arrow functions
// var ar = ()=>{alert("ArFunc")};
 //ar ();

// ( ()=>{ alert("ArFunc")} )();