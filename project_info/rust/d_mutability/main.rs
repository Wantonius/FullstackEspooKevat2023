fn main() {

	let x = 5;
	println!("The value of x is: {x}");
	//x = 6;
	//Remove the comment from the last line to see immutability in action. Type of x is inferred.

	let mut y = 5;
	println!("The value of y is: {y}");
	y = 6;
	println!("The value of y is: {y}");

	
	//Shadowing a variable within an inner scope	

	let z = 5;
	
	let z = z + 1;
	{
		let z = z * 2;
		println!("The value of z in the inner scope is: {z}");		
	}
	println!("The value of z is:{z}");
}
