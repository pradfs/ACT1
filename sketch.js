/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

const foo = "123";
function draw() {
  // Put drawings here
  fill(0, 0, 0);
  noStroke();
  rect(50, 50, 250, 250);
  fill(255);
  textStyle(BOLD);
  textSize(140);
  text(foo, 60, 250);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
