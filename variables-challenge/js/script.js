/**
 * Mr. Furious
 * Pippin Barr
 * Yannick Hantaniaina
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,

  // Colour in HSV
  fill: {
    h: 0,
    s: 11,
    v: 100
  }
};

//let our background sky
let sky = {
    //Position and size 
    x: 0,
    y: 0,
    size: 400,

    //color in HSV
    fill: {
        h: 210,
        s: 20,
        v: 78
    }
}
//birb

let bird = {
    //Position and size
    x:0,
    y:200,
    size: 30,

    fill:{
        h:0,
        s:100,
        v:100
    }
}

let constraints = {
    min: 200,
    max: 200
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

/**
 *  Mr. Furious and the SKy
 */
function draw() {
  background(210, 20, 78);

  //Drawing sky over background 
    push()
    noStroke()
    fill(sky.fill.h,sky.fill.s,sky.fill.v)
    square(sky.x,sky.y,sky.size)
    pop()

    //changing sky to dark
    sky.fill.v = sky.fill.v-0.2


  // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.h, mrFurious.fill.s, mrFurious.fill.v);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    // changing mr furious's color
    mrFurious.fill.s = mrFurious.fill.s+0.2

    //changing mr furious position so he shakes 
    mrFurious.x = (random(0,400))*0.6// changes his position to a random place on the canvas
    mrFurious.y = (random(0,400))*0.6
    mrFurious.x = constrain(mrFurious.x,constraints.min,constraints.max)//constrains position so it stays within the scope
    mrFurious.y = constrain(mrFurious.y,constraints.min,constraints.max) 

    //changes the constraints over time to limit movements
    constraints.min = constraints.min-0.007
    constraints.max = constraints.max+0.007


  // Draw the bird and making it contrast with the background
    push()
    noStroke()
    fill(random(0,360),bird.fill.s,bird.fill.v) // changing the bird's color hue randomly
    arc(bird.x,bird.y,bird.size,bird.size,HALF_PI+QUARTER_PI,PI+QUARTER_PI)
    arc(bird.x,bird.y,bird.size,bird.size,PI+HALF_PI+QUARTER_PI,TWO_PI+QUARTER_PI)
    pop()

    //changing the bird's position
    bird.x = bird.x+1 // moves it to the left 
    bird.y = 200+100*Math.sin(bird.x*0.05) // changes y into an oscillating position 
    bird.x = constrain(bird.x,0,400)
    bird.y = constrain(bird.y,100,300) // constrains bird's position to just around mrfurious

  





}