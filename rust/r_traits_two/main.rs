struct Animal {
	name:String,
}

trait Dog {
	fn bark(&self);
	fn run(&self);
}

impl Dog for Animal {
	
	fn bark(&self) {
		println!("{}, stop barking.",self.name);
	}
	
	fn run(&self) {
		println!("{} is running around.",self.name);
	}
}

fn main() {
	let rover = Animal {
		name:"Rover".to_string(),
	};

	rover.bark();
	rover.run();
}