const socket = io();
const productsList = document.getElementById("products-list");
const productsForm = document.getElementById("products-form");
const inputProductId = document.getElementById("input-product-id");
const btnDeleteProduct = document.getElementById("btn-delete-product");
const errorMessage = document.getElementById("error-message");

socket.on("products-list", (data) => {
	const products = data.products || {};
	productsList.innerHTML = "";

	products.forEach((product) => {
		const productItem = document.createElement("div");
		productItem.classList.add("card");
		productItem.innerHTML = `
  			<img class="card-img-top" src="/api/public/images/${product.thumbnail}" alt="Card image cap">
  		<div class="card-body">
    		<h5 class="card-title">${product.title}</h5>
    		<p class="card-text">${product.description}</p>
  		</div>
		<ul class="list-group list-group-flush">
		<li class="list-group-item">Id: ${product.id}</li>
    	<li class="list-group-item">Stock: ${product.stock}</li>
    	<li class="list-group-item">Categoría: ${product.category}</li>
    	<li class="list-group-item">Precio: ${product.price}</li>
		</ul>`;

		productsList.appendChild(productItem);
	});
});

productsForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const form = event.target;
	const formdata = new FormData(form);
	try {
		const response = await fetch("/api/products", {
			method: "POST",
			body: formdata,
		});
		if (!response.ok) {
			const error = await response.json();
			console.log(`Error: ${error.message}`);
			return;
		}
		console.log("Producto agregado con éxito.");
		productsForm.reset();
	} catch (error) {
		console.error("Error en el formulario:", error);
	}
});

btnDeleteProduct.addEventListener("click", () => {
	const id = inputProductId.value;
	inputProductId.innerText = "";
	errorMessage.innerText = "";
	if (id > 0) {
		socket.emit("delete-product", { id });
	}
});

socket.on("error-message", (data) => {
	errorMessage.innerText = data.message;
});
