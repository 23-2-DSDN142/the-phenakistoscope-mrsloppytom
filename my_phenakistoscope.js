const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("moon2" , "png");
  pScope.load_image_sequence("horse" , "png", 11);
}


function setup_layers(pScope){

  var horseSeq = new PLayer(horseRing);
  horseSeq.mode(RING);
  horseSeq.set_boundary(800, 1000);

  var moon = new PLayer(meliesMoon);
  moon.mode(RING);
  moon.set_boundary(0, 200);

  var star = new PLayer(stars);

  var bigEye = new PLayer(eye);
  bigEye.mode(RING);
  bigEye.set_boundary(400, 600);

}

//code for Eye ring
var diEye = 1; //variable set for sclera diameter
function eye(x,y, animation, pScope){

  //quad eyeshadow
  fill(59, 39, 26);//very dark brown
  noStroke();
  quad(-120, 600,
     0,450,
    120, 600, 
    0, 700);

  //sclera of eye
  fill(222, 200, 113); //yellowish
  ellipse(0, 590, 250, diEye);
  fill(59, 39, 26); //very dark brown
  circle(0, 590, 120);

  //reflections in eye
  fill(242, 226, 182);
  circle(0, 600, 10);
  circle(15, 585, 10);
  circle(-15, 585, 10);

  //animation for sclera size change
  diEye = diEye+0.5   
  if (diEye>200){
    diEye=50};

  
}


//code for stars - innermost ring
function stars(x, y, animation, pScope){
  fill(255);
  noStroke();
  circle(0,-350-animation.wave()*10, 10)
  circle(50,-400-animation.wave()*10, 10)
  circle(-50,-400-animation.wave()*10, 10)
}


//code for moon - centre
function meliesMoon(x,y,animation, pScope){
  scale(1)
  pScope.draw_image("moon2",x,y);
}


//code for horses running - outermost ring
//also code for background colours (it wouldn't fit elsewhere)
function horseRing(x, y, animation, pScope){

  //setting up background colours
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  //red ring on very edge
  fill(191, 77, 75)
  noStroke()
  arc(x,50,3000,3000,backgroundArcStart,backgroundArcEnd)

  //outermost ring background
  fill(222, 200, 113)
  noStroke()
  arc(x,50,2050,2050,backgroundArcStart,backgroundArcEnd);

  //code for horse animation
  scale(0.7)
  pScope.draw_image_from_sequence("horse", -10, -1200, animation.frame, 100);

  //second ring
  fill(92, 76, 41)
  noStroke()
  arc(x,100,2250,2250,backgroundArcStart,backgroundArcEnd); 

  //innermost ring
  fill(59, 39, 26)
  noStroke()
  arc(x,100,1500,1500,backgroundArcStart,backgroundArcEnd); 

}


