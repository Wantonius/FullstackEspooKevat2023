function start() {

	let HelloWorld = function() {
		this.name = "World";
		this.message = "Hello";
	}
	
	let helloInstance = new HelloWorld();
	
	HelloWorld.prototype.name = "Jaska";
	HelloWorld.prototype.message2 = "Goodbye";
	
	console.log(helloInstance.name);
	console.log(helloInstance.message);
	console.log(helloInstance.message2);
	console.log(helloInstance);
}