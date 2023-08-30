struct Animal {
	name:String,
}

trait Dog { //functionality comes from the Dog trait
	fn bark(&self) {
		println!("Woof woof");
	}
	
	fn run(&self) {
		println!("The dog is running");
	}
}

impl Dog for Animal {} //Now Animal has the trait Dog

fn main() {
	let rover = Animal {
		name:"Rover".to_string(),
	};

	rover.bark();
	rover.run();
}