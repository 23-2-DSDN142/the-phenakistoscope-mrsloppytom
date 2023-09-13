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

var diEye = 1
function head(x,y, animation, pScope){

  fill(59, 39, 26);//very dark brown
  quad(-120, 600, //leave
     0,450,
      120, 600, //LEAVE WHERE IS
       0, 700)//LEAVE WHERE IS

  fill(242, 226, 182);
  noStroke();
  ellipse(0, 590, 250, diEye)

 

  fill(59, 39, 26) //very dark brown
  circle(0, 590, 120)

  fill(242, 226, 182)
  circle(0, 600, 10)
  circle(15, 585, 10)
  circle(-15, 585, 10)

  diEye = diEye+0.5
  if (diEye>200){
    diEye=50;

 
  }
}

function stars(x, y, animation, pScope){
  fill(255);
  noStroke();
  circle(0,-350-animation.wave()*10, 10)
  circle(50,-400-animation.wave()*10, 10)
  circle(-50,-400-animation.wave()*10, 10)
}

function meliesMoon(x,y,animation, pScope){
  scale(1)
  pScope.draw_image("moon2",x,y);
}

function horseRing(x, y, animation, pScope){

  //setting up background colours
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(2, 149, 212)
  noStroke()
  arc(x,50,3000,3000,backgroundArcStart,backgroundArcEnd);//outermost ring background

 
  // scale(animation.frame*2);
  scale(0.7)
  pScope.draw_image_from_sequence("horse", -10, -1225, animation.frame, 100);

  fill(0, 105, 150)
  noStroke()
  arc(x,100,2250,2250,backgroundArcStart,backgroundArcEnd); //second ring

  fill(0, 68, 97)
  noStroke()
  arc(x,100,1500,1500,backgroundArcStart,backgroundArcEnd); //innermost ring

}


