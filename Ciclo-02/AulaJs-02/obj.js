/*
var/let/const
*/

/*var nome="Diogo"; //var global
let sobrenome = "Gemaque;"

if(true) {
	console.log ("Var nome: "+ nome);
	var nm = nome;
	console.log("Chamando o sobrenome "+sobrenome)
	let sn = "Cantuaria"; //"let" e "const" quando criadas dentro de um escopo (elas deixam de ser globais) só pode ser manipulada dentro do escopo que foram criadas
	console.log(sobrenome);
}


console.log("Var nome: "+ nm +" "+sobrenome+" "+sn);
console.log("Var nome: "+ nm);*/

pessoa = { 
	nome : "Diogo", 
	idade : "35",
	sexo : "Masculino",
	dados: function(){
		document.write(
			"Nome: "+this.nome+"<br>"+
			"Idade: "+this.idade+"<br>"+
			"Sexo: "+this.sexo+"<br>")
	}
}

pessoa.dados ();
/*console.log("Nome: "+pessoa.nome+
			" Idade: "+pessoa.idade+" Sexo: "+pessoa.sexo);*/