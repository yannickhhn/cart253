/**
 * Cannon 2
 * Yannick Hantaniaina
 * 
 * This will be an extension of the variables challenge "cannon". Part of the code of that prototype will be used here.
 */

"use strict";
/**
 * rectangular canvas to get the extent of the movement
*/
function setup() {
    createCanvas(600,300)
    colorMode(HSL)
    ///frameRate(20)
}

/**
 * This is the ball variable
 */
function createBall(){
    let ball = {
        //position
        x: 50,
        y: 258,
        size: 20,
        launch: 0,
        //color
        fill: {
        h: 18,
        s: 94,
        l: 97,
        },
        //velocity
        velocity: {
        vx: 4,
        vy: -4,
        },
    
        acceleration: {
        ax:0,
        ay:0.075 // downward acceleration as gravity
        }
    }
    return ball;
}
/*
* NEW ADDITIONS
*
a ball array for it to keep launching*/
let balls = [];


/**
 * my drawing draws a projectile across the canvas in a parabola
*/
function draw() {
    //background
    background(8,40,40)
    fill(8,80,10)
    rect(0,280,width)

   
    for (let ball of balls) {
        moveBall(ball)
        drawBall(ball)
    }
    
   drawCannon()
}

   //mouse press function because i keep having issues with ball frame rate
function mousePressed(){
       let newBall = createBall()
        newBall.launch = 1
        balls.push(newBall)
        console.log(balls.length)
}

// moved this to be more readable
function moveBall(ball){
    ball.velocity.vx += ball.acceleration.ax*ball.launch
    ball.velocity.vy += ball.acceleration.ay*ball.launch
    ball.x +=ball.velocity.vx*ball.launch
    ball.y +=ball.velocity.vy*ball.launch
}

//draws the ball
function drawBall(ball){
    fill(ball.fill.h,ball.fill.s,ball.fill.l)
    ball.y = constrain(ball.y,0,280)// to make it fall on the ground
    circle(ball.x,ball.y,ball.size) 

}

//draws the cannon

function drawCannon(){
    fill(0,0,10) 

        push() // rotates cannon head towards the desired huh direction
        stroke(0)
        strokeWeight(2)
        translate(60,263)
        rotate(radians(-45))
        rect(-35,-20,50,22)
        pop()

        push()//small square below
        stroke(0)
        strokeWeight(2)
        square(30,270,20)
        pop()

}