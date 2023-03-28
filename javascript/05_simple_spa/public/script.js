window.onload = function(){
	createForm();
}

createForm = () => {
	let root = document.getElementById("root");
	let form = document.createElement("form");
	
	//First name input and label
	
	let firstNameInput = document.createElement("input");
	firstNameInput.setAttribute("type","text");
	firstNameInput.setAttribute("value","");
	firstNameInput.setAttribute("name","firstname");
	firstNameInput.setAttribute("id","firstname");
	let firstNameLabel = document.createElement("label");
	firstNameLabel.setAttribute("for","firstname");
	let firstNameText = document.createTextNode("First Name");
	firstNameLabel.appendChild(firstNameText);
	
}