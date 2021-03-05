let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let newItem = document.createElement("li");
	newItem.innerHTML = "Fourth element";
	let list = document.querySelector("#myList");
	list.appendChild(newItem);
	console.log(newItem);
});
