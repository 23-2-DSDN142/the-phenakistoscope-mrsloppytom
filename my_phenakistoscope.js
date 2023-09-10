const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("moon" , "png");
  pScope.load_image_sequence("horse" , "png", 11);
}



function setup_layers(pScope){

  new PLayer(null, 130, 219, 237);  //lets us draw the whole circle background, ignoring the boundaries

  var horseSeq = new PLayer(horseRing);
  horseSeq.mode(RING);
  horseSeq.set_boundary(800, 1000);

  // var film = new PLayer(filmWheel);
  // film.mode(RING);
  // film.set_boundary(200, 1000);

  var moon = new PLayer(meliesMoon);
  moon.mode(RING);
  moon.set_boundary(0, 200);

  // var lights = new PLayer(flashes);
  // lights.mode(SWIRL(3));
  // lights.set_boundary(300, 700);

  var star = new PLayer(stars)

  var bigHead = new PLayer(head)
  bigHead.mode(RING);
  bigHead.set_boundary(400, 600)


}

// function flashes(x, y, animation, pScope){
//   fill(255);
//   noStroke();
//   rect(0, -100-animation.wave()*10, 10, 100);
// }

var diHead = 50
var diMouth = 10
function head(x,y, animation, pScope){
  fill(255);
  noStroke();

  
  circle(0, 620, diHead)
  diHead = diHead+1
  if (diHead>200){
    diHead=50;
  }


  


}

function stars(x, y, animation, pScope){
  fill(255);
  noStroke();
  circle(0,-400-animation.wave()*10, 10)
  circle(50,-450-animation.wave()*10, 10)
  circle(-50,-450-animation.wave()*10, 10)
}

function meliesMoon(x,y,animation, pScope){
  scale(1)
  pScope.draw_image("moon",x,y);
}

function horseRing(x, y, animation, pScope){

  //setting up background colours
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(2, 149, 212)
  noStroke()
  arc(x,50,3000,3000,backgroundArcStart,backgroundArcEnd);//outermost ring

 
  // scale(animation.frame*2);
  scale(0.7)
  pScope.draw_image_from_sequence("horse", -10, -1250, animation.frame, 100);

  fill(0, 105, 150)
  noStroke()
  arc(x,50,2250,2250,backgroundArcStart,backgroundArcEnd); //second ring

  fill(0, 68, 97)
  noStroke()
  arc(x,50,1500,1500,backgroundArcStart,backgroundArcEnd); //innermost ring

}


