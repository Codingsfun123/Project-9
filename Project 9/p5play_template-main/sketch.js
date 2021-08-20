
function setup() {
  createCanvas(400,400);
  if (keyIsDown(RIGHT_ARROW)) { background("red"); }



  grn_btn = createButton("GREEN");
  grn_btn.position(150,200);
  grn_btn.mousePressed(grn_bg());

  background("orange")
}

function draw() 
{
  //background(30);
if (keyIsDown(RIGHT_ARROW)) { background("red"); }
}

function red_bg(){
  r = 255;
  b = 0;
  g = 0;
console.log("executing red")
  background("red")
}
function grn_bg(){
  r = 0;
  b = 0;
  g = 255;
console.log("executing green")
  background("green")
}



