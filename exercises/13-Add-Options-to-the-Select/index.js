window.onload = function() {
	console.log("The website was loaded...");

	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let select = document.querySelector("#mySelect");
	for (let i = 0; i < countries.length; i++) {
		let option = document.createElement("option"); //Creamos la opcion

		option.innerHTML = countries[i]; //Metemos el texto en la opción
		select.appendChild(option); //Metemos la opción en el select
	}
	select.addEventListener("change", function() {
		alert(this.options[this.selectedIndex].text);
	});
};
