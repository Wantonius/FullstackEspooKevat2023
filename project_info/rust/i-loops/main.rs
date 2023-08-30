fn main() {

	for number in 0..3 {
		println!("The number is:{}",number);
	}

	for number in 0..=3 {
		println!("The number is:{}",number);
	}
	
	let mut counter = 0;
	
	loop {
		counter += 1;
		println!("The counter is now at {}",counter);
		if counter == 5 {
			break;
		}
	}
	
	//Named loops: Use ' to name loop

	let mut counter = 0;
	let mut counter2 = 0;
	println!("Now entering first loop");
	
	'first_loop:loop {
		counter += 1;
		println!("Counter is now at {}",counter);
		if counter > 9 {
			println!("Now entering second loop");
			'second_loop:loop {
				counter2 += 1;
				println!("Second counter is at {}",counter2);
				if counter2 == 3 {
					break 'first_loop;
				}
			}
		}
	}
	println!("After second_loop");

	let mut counter = 0;
	
	while counter < 5 {
		counter += 1;
		println!("The counter is at {}",counter);
	}
}