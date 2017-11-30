var value;

function setup() {
	createCanvas(720, 400);
	value = color(204,102,0);

}

function draw() {
	background(50);
	fill(value);
	noStroke();
	ellipse(mouseX, mouseY, 200, 200);
}

function mousePressed() {
	value = color(50, 55, 100);
	
}