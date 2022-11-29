let x = 1;
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(color("#034159"));
  rect(30+x, 20+x, 55, 55);
  noFill(); 
  stroke(color("#0CF25D"))
  x = x + 1;
  rotate(PI/10);
}
