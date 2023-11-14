document.addEventListener("DOMContentLoaded", () => {});

const logofolioIMG = document.querySelector(".logofolioIMG");
logofolioIMG.addEventListener("click", (e) => {
	e.stopPropagation();

	if (e.target && e.target.name === "img_logofolio") {
		console.log(e.target);
		const img = e.target;
		const title = img.getAttribute("data-title");
		const description = img.getAttribute("data-description");
		console.log(title, description);
		// Abre la modal
		const modal = document.getElementById("logoModal"); // obtener modal
		const modalShow = new bootstrap.Modal(modal); // funcion para mostrar modal

		modal
			.querySelector(".card-img_logofolio")
			.setAttribute("src", img.getAttribute("src")); // cambiar ruta de imagen logo
		modal.querySelector("#logoModalLabel").textContent = title; // cambiar titulo
		modal.querySelector("#logoDescription").textContent = description; // cambiar descripción

		modalShow.show(); // mostrar modal
	}
});
