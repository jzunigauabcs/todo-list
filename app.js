const btnGuardar = document.querySelector("#btnGuardar");

btnGuardar.addEventListener("click", function(e) {
	e.preventDefault();	
	const elemento = document.querySelector("#tbxElemento").value;
	agregarElemento(elemento);
});

function agregarElemento(texto) {
	const lista = document.querySelector("#lista");
	const elemento = document.createElement("li");
	elemento.appendChild(document.createTextNode(texto));
	lista.appendChild(elemento);
}




















