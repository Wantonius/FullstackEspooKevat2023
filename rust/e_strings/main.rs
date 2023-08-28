fn main() {

	//There are two String types in Rust. First one is string reference &str which is a light-weight and fast. The other is String type which has more functionality
	
	let name = "Bingo";
	let other_name = String::from("Adrian Tepes");
	
	println!("My name is {0} and this is {1}.",name,other_name);

	//The &str is dynamically sized and is a reference. String is an owned type and it has a size

	println!("A String is always {:?} bytes. It is Sized.",std::mem::size_of::<String>());
	println!("An i8 is always {:?} bytes. It is Sized.",std::mem::size_of::<i8>());
	println!("A f64 is always {:?} bytes. It is Sized.",std::mem::size_of::<f64>());
	println!("But &str can be anything. 'Bingo' is {:?} bytes. It is not Sized.",std::mem::size_of_val("Bingo"));
	println!("'Adrian Tepes' is {:?} bytes. It is not Sized.",std::mem::size_of_val("Adrian Tepes"));

	let my_name = "Jim Bob";
	let my_country = "USA";
	let my_home = "Alabama";
	
	let together = format!(
		"I am {} and I come from {}. I live in {}.",
		my_name,my_country,my_home
	);
	
	println!("{}",together);
}