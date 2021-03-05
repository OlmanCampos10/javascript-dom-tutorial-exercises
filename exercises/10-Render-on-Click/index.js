let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let newbutton = document.createElement("p");
	newbutton.innerHTML = "Hello World";
	newbutton.style.background = "yellow";
	document.body.appendChild(newbutton);
	console.log(newbutton);
});
