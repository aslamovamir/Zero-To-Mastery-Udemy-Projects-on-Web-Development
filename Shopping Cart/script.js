var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addWithClick() {
	if (input.value.length > 0) {
		createElement();
	}
};

button.addEventListener("click", function() {
	if (input.value.length > 0) {
		createListElement();
	}
});

input.addEventListener("keypress", function(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}
});

