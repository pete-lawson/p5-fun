let x = 1;
let angle = 0;
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(color("#034159"));
  translate(mouseX, mouseY);
  rotate(angle);
  rectMode(CENTER);
  rect(0, 0, 100, 100);
  rect(0, 0, 90, 90);
  rect(0, 0, 80, 80);
  rect(0, 0, 70, 70);
  rect(0, 0, 60, 60);
  rect(0, 0, 50, 50);
  rect(0, 0, 40, 40);
  rect(0, 0, 30, 30);
  noFill();
  stroke(color("#0CF25D"))
  x = x + 1;
  angle = angle + 1;
}
