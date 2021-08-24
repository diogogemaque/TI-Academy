/*concat() - Junta os elementos de dois ou mais arrays e retorna uma 
cópia com os elementos juntos*/
var frutas=["Uva","Banana","Amora","Melão"]; //var frutas = Array ()
console.log(`Qtd do array: ${frutas.length} fruta: ${frutas[0]}`);

var frutas2=["Maçã","Pêra","Laranja"];

var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas);



/*indexof() - Procura por um elemento específico no array e retorna a 
sua posição*/
var retornoIndexof = todasAsFrutas.indexOf("Pêra");
console.log(retornoIndexof);



/*join() - Junta todos os elementos de um array em uma string*/
var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);



/*push() - Insere um novo elemento no final do array */
var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca", "Qualquer brinquedo");
console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);



/*pop() Remove o ;ultimo elemento do array*/
console.log(outraLista.pop());

console.log(outraLista);



/*reverse () - Inverte a ordem dos elementos do array*/
console.log(outraLista.reverse())



/*shift() Remove o primeiro elemento do array*/
var removerPrimeiro = ["fusca", "variante"];
removerPrimeiro.shift()
console.log(removerPrimeiro.shift()); 


/*sort() Ordena os elementos do array em ordem crescente*/
//var alfa = ["b", "z", "t", "a"];
var alfa = [6, 4, 9, 2];
//var alfa = [10, 9, 20, 30, 1, 3];
alfa.sort();
console.log(alfa);

/*toString() Converte um array em string e retorna essa string*/
// vide join

/*unshift() Insere um novo elemnto no inícioi do array*/
alfa.unshift(10);
console.log(alfa);

/*splaice() COrta o array em um ponto indicando dois parametros indice e 
quantos elementos quer remover a partir da posição... */
var f = ["Uva", "Banana", "Amora", "Melão"]; //var frutas = array()
var idx = f.indexOf("Banana");
//f.splice(1,2); // corta daquele ponto dois elementos ([1]Banana e [2]Amora)
//console.log(f); //mostra no console os elementos restante (Uva e Melao)
//console.log(f.splice(1,1)) //mostra quem foi cortada
//idem a parte de baixo
console.log(idx);
console.log( f.splice(idx, 2));
console.log(f);



//podemos criar arrays de objetos 
var dados = [							//estrutura de arrays c/ objetos dentro 
			{nome: "Marcelo"}, //indíce 0
			{nome: "Raphael"} //indíce 1

			]

// console.log(dados[0].nome)
// console.log(dados[1].nome)

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg:doc[0], 
		cpf:doc[1]
	}

}

var pessoa2 = new Pessoa2("Raphael", "", "", ['22', '555']); 

console.log(`Nome: ${pessoa2.nome}  Rg: ${pessoa2.doc.rg}`);
console.log(`Nome: ${pessoa2.nome} Cpf: ${pessoa2.doc.cpf}`);


