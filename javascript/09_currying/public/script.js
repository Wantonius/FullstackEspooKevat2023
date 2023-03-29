function start() {
	console.log("----- Simple currying function -----");
	console.log(sum(4)(2));
	console.log(sum(2));
}

const sum = x => y => x+y;

const syncFunc = x => x*2;

const asyncFunc = x => new Promise(resolve => {
	setTimeout(() => {
		console.log("Timer done");
		return resolve(x*2)
	},5000)
})