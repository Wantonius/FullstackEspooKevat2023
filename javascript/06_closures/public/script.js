const makeCounter = function() {
	let privateCounter = 0;
	
	function changeBy(val) {
		privateCounter += val;
	}
	
	return {
		increment:function() {
			changeBy(1);
		},
		decrement:function() {
			changeBy(-1);
		},
		value:function() {
			return privateCounter;
		}
	}
}

function start() {
	let counter1 = makeCounter();
	let counter2 = makeCounter();
	
	console.log("Counter 1 value",counter1.value());
	console.log("Counter 2 value",counter2.value());
	
	counter1.increment();
	counter1.increment();
	counter1.increment();

	console.log("Counter 1 value",counter1.value());
	console.log("Counter 2 value",counter2.value());	

	counter2.decrement();
	counter2.decrement();
	counter2.decrement();

	console.log("Counter 1 value",counter1.value());
	console.log("Counter 2 value",counter2.value());

}






