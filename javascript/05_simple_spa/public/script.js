window.onload = function(){
	createForm();
}

createForm = () => {
	let root = document.getElementById("root");
	root.setAttribute("class","mb-3");
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
	
	//Last name input and label
	
	let lastNameInput = document.createElement("input");
	lastNameInput.setAttribute("type","text");
	lastNameInput.setAttribute("value","");
	lastNameInput.setAttribute("name","lastname");
	lastNameInput.setAttribute("id","lastname");
	let lastNameLabel = document.createElement("label");
	lastNameLabel.setAttribute("for","lastname");
	let lastNameText = document.createTextNode("Last Name");
	lastNameLabel.appendChild(lastNameText);

	//Email input and label
	
	let emailInput = document.createElement("input");
	emailInput.setAttribute("type","email");
	emailInput.setAttribute("value","");
	emailInput.setAttribute("name","email");
	emailInput.setAttribute("id","email");
	let emailLabel = document.createElement("label");
	emailLabel.setAttribute("for","email");
	let emailText = document.createTextNode("Email");
	emailLabel.appendChild(emailText);
	
	//Phone input and label

	let phoneInput = document.createElement("input");
	phoneInput.setAttribute("type","tel");
	phoneInput.setAttribute("value","");
	phoneInput.setAttribute("name","phone");
	phoneInput.setAttribute("id","phone");
	let phoneLabel = document.createElement("label");
	phoneLabel.setAttribute("for","phone");
	let phoneText = document.createTextNode("Phone");
	phoneLabel.appendChild(phoneText);

	//Submit Button
	
	let submitButton = document.createElement("input");
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("id","submitbutton");
	submitButton.setAttribute("value","Add");
	submitButton.setAttribute("class","btn btn-primary");

	//Append to form
	let br = document.createElement("br");
	form.appendChild(firstNameLabel);
	form.appendChild(firstNameInput);
	form.appendChild(br);
	form.appendChild(lastNameLabel);
	form.appendChild(lastNameInput);
	form.appendChild(br.cloneNode());
	form.appendChild(emailLabel);
	form.appendChild(emailInput);
	form.appendChild(br.cloneNode());
	form.appendChild(phoneLabel);
	form.appendChild(phoneInput);
	form.appendChild(br.cloneNode());
	form.appendChild(submitButton);
	form.addEventListener("submit",function(e) {
		e.preventDefault();
		addContact();
	})
	
	//append to root
	root.appendChild(form);
}

addContact = async () => {
	const firstname = document.getElementById("firstname").value;
	const lastname = document.getElementById("lastname").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const contact = {
		"firstname":firstname,
		"lastname":lastname,
		"email":email,
		"phone":phone
	}
	const request = {
		method:"POST",
		headers:{"Content-Type":"application/json"},
		body:JSON.stringify(contact)
	}
	const response = await fetch("/api/contact",request);
	if(response.ok) {
		console.log("Add contact success!");
	} else {
		console.log("Add contact failed. Reason:"+response.status+" "+response.statusText)
	}
}

getContactList = async () => {
	const request = {
		method:"GET"
	}
	const response = await fetch("/api/contact",request);
	if(response.ok) {
		const list = await response.json();
		console.log(list)
	} else {
		console.log("Get contacts failed. Reason:"+response.status+" "+response.statusText)
	}
}
