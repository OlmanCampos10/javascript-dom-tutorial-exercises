let list = document.querySelector("#parentLI");

let childs = list.childNodes;
console.log(childs);

list.removeChild(list.childNodes[3]);
