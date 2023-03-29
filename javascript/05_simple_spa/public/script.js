window.onload = function(){
	createForm();
	getContactList();
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
	const firstname = document.getElementById("firstname");
	const lastname = document.getElementById("lastname");
	const email = document.getElementById("email");
	const phone = document.getElementById("phone");
	const contact = {
		"firstname":firstname.value,
		"lastname":lastname.value,
		"email":email.value,
		"phone":phone.value
	}
	const request = {
		method:"POST",
		headers:{"Content-Type":"application/json"},
		body:JSON.stringify(contact)
	}
	const response = await fetch("/api/contact",request);
	if(response.ok) {
		console.log("Add contact success!");
		getContactList();
		firstname.value = "";
		lastname.value = "";
		email.value = "";
		phone.value = "";
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
		populateTable(list);
	} else {
		console.log("Get contacts failed. Reason:"+response.status+" "+response.statusText)
	}
}

removeContact =  async (id) => {
	const request = {
		method:"DELETE"
	}
	const response = await fetch("/api/contact/"+id,request);
	if(response.ok) {
		getContactList();
	} else {
		console.log("Remove contact failed. Reason:"+response.status+" "+response.statusText)
	}
}

populateTable = (data) => {
	const root = document.getElementById("root");
	const oldTable = document.getElementById("table");
	if(oldTable) {
		root.removeChild(oldTable);
	}
	const table = document.createElement("table");
	table.setAttribute("id","table");
	table.setAttribute("class","table table-striped");
	
	//Table header
	const header = document.createElement("thead");
	const headerRow = document.createElement("tr");
	const firstNameHeader = document.createElement("th");
	const firstNameText = document.createTextNode("First Name");
	firstNameHeader.appendChild(firstNameText);
	const lastNameHeader = document.createElement("th");
	const lastNameText = document.createTextNode("Last Name");
	lastNameHeader.appendChild(lastNameText);
	const emailHeader = document.createElement("th");
	const emailText = document.createTextNode("Email");
	emailHeader.appendChild(emailText);
	const phoneHeader = document.createElement("th");
	const phoneText = document.createTextNode("Phone");
	phoneHeader.appendChild(phoneText);
	const removeHeader = document.createElement("th");
	const removeText = document.createTextNode("Remove");
	removeHeader.appendChild(removeText);
	
	headerRow.appendChild(firstNameHeader);
	headerRow.appendChild(lastNameHeader);
	headerRow.appendChild(emailHeader);
	headerRow.appendChild(phoneHeader);
	headerRow.appendChild(removeHeader);
	
	header.appendChild(headerRow);
	
	table.appendChild(header);
	const body = document.createElement("tbody");
	for(let i=0;i<data.length;i++) {
		const tableRow = document.createElement("tr");
		for (x in data[i]) {
			if(x === "id") {
				continue;
			}
			const column = document.createElement("td");
			const info = document.createTextNode(data[i][x]);
			column.appendChild(info);
			tableRow.appendChild(column);
		}
		const removeColumn = document.createElement("td");
		const removeButton = document.createElement("button");
		removeButton.setAttribute("class","btn btn-danger");
		const removeButtonText = document.createTextNode("Remove");
		removeButton.appendChild(removeButtonText);
		removeButton.addEventListener("click",function(e) {
			removeContact(data[i].id);
		})
		removeColumn.appendChild(removeButton);
		tableRow.appendChild(removeColumn);
		body.appendChild(tableRow);
	}
	table.appendChild(body);
	
	root.appendChild(table);
}



