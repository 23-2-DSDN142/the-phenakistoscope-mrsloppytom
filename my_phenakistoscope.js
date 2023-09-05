const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("ball" , "png");
  pScope.load_image("camera_lens" , "png");
  pScope.load_image("filmRing" , "png");
  // pScope.load_image_sequence("horseRun" , "png", 11);
  pScope.load_image_sequence("horse" , "png", 11);
}



function setup_layers(pScope){

  new PLayer(null, 130, 219, 237);  //lets us draw the whole circle background, ignoring the boundaries

  var horseSeq = new PLayer(horseRing);
  horseSeq.mode(RING);
  horseSeq.set_boundary(800, 1000);

  var film = new PLayer(filmReel);
  film.mode(RING);
  film.set_boundary(400, 800);

  var lens = new PLayer(camLens);
  lens.mode(RING);
  lens.set_boundary(0, 200);

}

function camLens(x,y,animation, pScope){
  scale(3)
  pScope.draw_image("camera_lens",x,y);
}



function horseRing(x, y, animation, pScope){

  // scale(animation.frame*2);
  scale(0.7)
  pScope.draw_image_from_sequence("horse", -10, -1250, animation.frame, 100);

}



// function ball(x, y, animation, pScope){
//   scale(animation.frame*2);

//   scale(0.3)
//   pScope.draw_image("ball",x,y);
// }





// function squares(x, y, animation, pScope){

//   // this is how you set up a background for a specific layer
//   let angleOffset = (360 / SLICE_COUNT) / 2
//   let backgroundArcStart = 270 - angleOffset;
//   let backgroundArcEnd = 270 + angleOffset;

//   fill(255)
//   noStroke()
//   arc(x,50,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

//   fill(100)
//   noStroke()
//  circle(-10,-300-animation.wave()*10, 100) // .wave is a cosine wave btw

// }

function filmReel(x, y, animation, pScope){

  push();
  scale(0.7);
  pScope.draw_image("filmRing",x,y);
  pop();

  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(0)
  noStroke()
  arc(x, y,800,800,backgroundArcStart,backgroundArcEnd);

 
  
  }

