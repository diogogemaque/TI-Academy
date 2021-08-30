window.onload = function(){
	//produtos	
	(()=>{
		let mostrarProdutosCliente = document.querySelector("#content-produtos>ul#produtos");
		
		for(let idx in produtos){
			mostrarProdutosCliente.innerHTML+=`<li class=itemProduto data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
		}

})(produtos)


	//compra

const itemProduto=document.querySelectorAll("#produtos>li.itemProduto");
const cestaDoCliente=document.querySelector("ul#cestaDoCliente");
const mostraTotalCompra=document.querySelector("#mostraTotalCompra");
const armazenaItem=[];
var totalPedido =0;

itemProduto.forEach((item)=>{
	item.addEventListener('click',()=>{
		//alert("lista")
		let li = document.createElement("li");
		li.setAttribute('class','itemCesta');

		let span=document.createElement("span");
		span.setAttribute('class','material-icons');
		span.innerHTML="clear";

		if(armazenaItem.indexOf(item.textContent) == -1){
			armazenaItem.push(item.textContent);
			li.textContent=item.textContent;
			li.appendChild(span);
			
			cestaDoCliente.appendChild(li);
			span.addEventListener('click',()=>{
				if(confirm("Deseja mesmo remover este item da sua cesta?")){
					let indexRemove = armazenaItem.indexOf(item.textContent);
					armazenaItem.splice(indexRemove,1);
					cestaDoCliente.removeChild(span.parentElement);
					totalPedido-=item.dataset.preco;
					mostraTotalCompra.value = totalPedido.toLocaleString('pt-Br',{style: 'currency',currency:'BRL'});
				}
			});
			totalPedido += Number(item.dataset.preco);

			mostraTotalCompra.value = totalPedido.toLocaleString('pt-Br',{style: 'currency',currency:'BRL'});
		}else{
			alert(`Este item ${item.textContent} já está na cesta`);
		}
	});
});

}