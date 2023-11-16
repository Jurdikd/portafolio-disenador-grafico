document.addEventListener("DOMContentLoaded", () => {});

const ilustracionIMG = document.querySelector(".ilustraciones");
ilustracionIMG.addEventListener("click", (e) => {
	e.stopPropagation();

	if (e.target && e.target.name === "img_ilustracion") {
		//console.log(e.target);
		const img = e.target;
		const title = img.parentNode.querySelector(".titlePersonaje").textContent; // obtener el titulo
		const description = img.parentNode.querySelector(".namePersonaje").textContent; // obtener la descripcion
		const alt = img.getAttribute("alt"); // obtener el alt
		console.log(title, description);
		// Abrir la modal
		const modal = document.getElementById("ilustracionModal"); // obtener modal
		const modalShow = new bootstrap.Modal(modal); // funcion para mostrar modal

		const imgModal = modal.querySelector(".card-img_ilustracion"); // obtener imagen de la modal

		// Aumenta el tamaño de la imagen al 200%

		imgModal.width = img.width * 2;
		imgModal.height = img.height * 2;

		imgModal.setAttribute("src", img.getAttribute("src")); // cambiar ruta de imagen logo
		imgModal.setAttribute("alt", alt); // cambiar alt
		modal.querySelector("#ilustracionModalLabel").textContent = title; // cambiar titulo
		modal.querySelector("#ilustracionDescription").textContent = description; // cambiar descripción

		modalShow.show(); // mostrar modal
	}
});
