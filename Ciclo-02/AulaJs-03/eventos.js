/*click Ao clicar em algum elemento html
mousemove - Ao mover o cursos do mouse acessa (entra) o elemento
mouseover - Ao mover o cursor do mouse dentro do elemento
mouseout - Ao mover o cursor para fora do elemento
dblclick - Ao efetuar duplo click (rápido) sobre o elemento
blur - Ao perder o foco do elemento, geralmente associado ao elemento html text
*/

window.onload = function() {


	// alert("alerta");	
	//const btn1 = document.getElementById("btn1");
	const btn1 = document.querySelector(".btn-click"); //captura o elemento (input) btn1;
	const legP = document.querySelector(".legenda"); //captura o elemento (parágrafo) legP;
	const cxTexto = document.querySelector("#texto");

	/*click - Ao clicar em algum elemento HTML*/
	btn1.addEventListener('click', ()=>{

			legP.innerHTML += cxTexto.value; //escerver no elemento 
							//(+=) concatena o valor anterior (aiushiaush+ahaiuhia)
	})
	legP.addEventListener('click', ()=>{

			legP.innerHTML ='';
	})

/*mousemove - Ao mover o cursos do mouse acessa (entra) o elemento*/
	/*legP.addEventListener('mousemove',()=>{

			alert("Teste")
	})*/

/*mouseout - Ao mover o cursor para fora do elemento*/
/*	legP.addEventListener('mouseout',()=>{

			alert("Teste")
	})*/

/*TROCAR TIPO DE ELEMENTO*/

	const trocaSenha = document.querySelector("#versenha");
	const cxSenha = document.querySelector("#senha");
	trocaSenha.addEventListener('click', ()=>{
		 //primeiro alvo é o botão p/ revelar a senha; segundo alvo é a cx da senha que precisa ser revelada
		 //getAttribute() - serve p/ pegar o tipo de elemento
		 //setAttribute () - serve p/ atribuir um tipo ao elemento
		 /*if (cxSenha.getAttribute('type') == 'password'){
		 	alert ("Sim, é do tipo password");
		 } else {
		 	alert("Não é do tipo password");
		 }*///estrutura p/ verificar se o elemento cxSenha é realmente uma caixa do tipo password
		 if (cxSenha.getAttribute('type') == 'password'){
		 	cxSenha.setAttribute('type', 'text');
		 } else {
		 	cxSenha.setAttribute('type', 'password');
		 }

	});

//	alterar background da cxTbg
	const cxTrocaBg = document.querySelector("#cxTbg");
	cxTrocaBg.addEventListener('blur', ()=>{
		cxTrocaBg.setAttribute('class', 'corBg');
	});

 // somar valores cx input tex

 const valor1 = document.querySelector("#v1");
 const valor2 = document.querySelector("#v2");
 const btnSomar = document.querySelector("#soma");
 const spResultado = document.querySelector("#resultado");

 	btnSomar.addEventListener('click', ()=>{ 	//chamado do evento e registra o evento (bntSomar)
 		var cx1 = valor1.value;
 		var cx2 = valor2.value;
		var r = Number(cx1) + Number(cx2)

		spResultado.innerHTML = r;

 	})

 	//evento modal
 	const btnModal = document.querySelector("#chamarModal");
	const janelaM = document.querySelector("#janModal");
 	
 		btnModal.addEventListener('click', ()=>{

 		janelaM.setAttribute('class', 'modal')

 	});

 		janelaM.addEventListener('click', ()=>{
 			janelaM.classList.remove('modal');
 		})

}
