fn take_fifth(value:Vec<i32>) -> Option<i32> {
	if value.len() < 5 {
		None
	} else {
		Some(value[4])
	}
}

fn handle_option(my_option:Vec<Option<i32>>) {
	for item in my_option {
		match item {
			Some(number) => println!("Found a {}!",number),
			None => println!("Found a None!"),
		};
	};
}

fn check_if_five(number:i32) -> Result<i32,String> {
	match number {
		5 => Ok(number),
		_ => Err("Sorry, the number wasn't five.".to_string()),
	}
}

fn main() {
	let new_vec = vec![1,2];
	let bigger_vec = vec![1,2,3,4,5];
	let mut option_vec = Vec::new(); //Vector to hold Option<i32> types

	option_vec.push(take_fifth(new_vec)); //This pushes "None" into the vec
	option_vec.push(take_fifth(bigger_vec)); // This pushes Some(5) into the vec
	
	handle_option(option_vec); //Handles the different Options in the vec.
	
	let mut result_vec = Vec::new();
	
	for number in 2..7 {
		result_vec.push(check_if_five(number));
	}
	
	println!("{:?}",result_vec);
}