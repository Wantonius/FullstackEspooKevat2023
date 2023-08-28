fn print_country(country_name:String) {
	println!("{}",country_name);
}

fn print_country_returns_country(country_name:String) -> String {
	println!("{}",country_name);
	country_name //Return value. No semicolon
}

fn print_country_with_reference(country_name: &String) {
	println!("{}",country_name);
}

fn add_sweden(country_name:&mut String) {
	country_name.push_str("-Sweden");
	println!("Now it says: {}",country_name);
}

fn main() {
	let country = String::from("Finland");
	print_country(country);
	//print_country(country);

	/*
		If we remove the comment from that other print_country line it will not work Rust has
		very specific ownership rules for variables and transferring the variable to a function
		will also transfer the ownership. When a block of code ends all variables and their
		associated memory will be released. So the country variable no longer exists on the second line.
	*/
	
	let country = String::from("Finland");
	let country = print_country_returns_country(country);
	print_country_returns_country(country);

	//Finally borrowing or passing a reference to a function. Ownership stays
	
	let country = String::from("Finland");
	print_country_with_reference(&country);
	print_country_with_reference(&country);
	
	let mut country = String::from("Finland");
	add_sweden(&mut country);
	
}