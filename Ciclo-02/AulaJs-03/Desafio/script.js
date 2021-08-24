window.onload = function () {
 
	const v1 = document.querySelector("#v1"); 
	const v2 = document.querySelector("#v2");
	const btnSomar = document.querySelector("#btn");
	const resultado = document.querySelector("#result");

		btnSomar.addEventListener('click', ()=>{
			var cx1 = v1.value;
			var cx2 = v2.value;
			var r = Number(cx1) + Number(cx2);
			var btnResul = result.value;

			resultado.innerHTML = r;

		if (btnResul == r) {
			alert("Sim, está certo");
		} 
		else { (btnResul != r) 
			alert("Error, tente novamente");
		}

		})


}