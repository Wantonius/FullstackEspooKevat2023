var canvas;
var ctx;
var running = 0;
var interval;

window.onload = function() {
	canvas = document.getElementById("mycanvas");
	ctx = canvas.getContext("2d");
}

function createRect() {
	let x = 0;
	let y = 0;
	let side = 0;
	let color = "#";
	let colorpicker = "0123456789ABCDEF";
	x = Math.floor((Math.random()*400)+1);
	y = Math.floor((Math.random()*400)+1);
	side = Math.floor((Math.random()*80)+20);
	for(let i = 0;i<6;i++) {
		let temp = Math.floor(Math.random()*16);
		color = color + colorpicker[temp];
	}
	ctx.fillStyle = color;
	ctx.fillRect(x,y,side,side);
}

function startCanvas() {
	if(running) {
		running = 0;
		clearInterval(interval);
	} else {
		interval = setInterval(createRect,300);
		running = 1;
	}
}

function clearCanvas() {
	ctx.clearRect(0,0,500,500);
}