const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("ball" , "png");
}



function setup_layers(pScope){

  new PLayer(null, 180);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(ball);
  layer1.mode( SWIRL(10) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

}


function ball(x, y, animation, pScope){
  scale(animation.frame*2);

  scale(0.3)
  pScope.draw_image("ball",x,y);
}

function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(255)
  noStroke()
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(100)
  noStroke()
 circle(-10,-300-animation.wave()*10,100) // .wave is a cosine wave btw


  
}
