document.addEventListener("DOMContentLoaded", () => {});

const logofolioIMG = document.querySelector(".logofolioIMG");
logofolioIMG.addEventListener("click", (e) => {
	e.stopPropagation();

	if (e.target && e.target.name === "img_logofolio") {
		console.log(e.target);
		const img = e.target;
		const title = img.getAttribute("data-title"); // obtener el titulo
		const description = img.getAttribute("data-description"); // obtener la descripcion
		const alt = img.getAttribute("alt"); // obtener el alt

		// Abrir la modal
		const modal = document.getElementById("logoModal"); // obtener modal
		const modalShow = new bootstrap.Modal(modal); // funcion para mostrar modal

		const imgModal = modal.querySelector(".card-img_logofolio"); // obtener imagen de la modal

		// Aumenta el tamaño de la imagen al 200%

		imgModal.width = 300;
		imgModal.height = 300;

		imgModal.setAttribute("src", img.getAttribute("src")); // cambiar ruta de imagen logo
		imgModal.setAttribute("alt", alt); // cambiar alt
		modal.querySelector("#logoModalLabel").textContent = title; // cambiar titulo
		modal.querySelector("#logoDescription").textContent = description; // cambiar descripción

		modalShow.show(); // mostrar modal
	}
});
