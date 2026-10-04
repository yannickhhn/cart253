/**
 * Mini-platform Game
 * Yannick Hantaniaina 
 * 
 * Maybe explore keyboard input as conditionals. A vertical level maze were the platforms act as barriers and if it falls and reaches an object it dies 
 * say explore dist(), a constant acceleration (gravity), a platform support that keeps the y constant, and a goal to win if you reach the end of the parcour 
 * also think of exploring keyboard input OR buttons for movement input. 
 * 
 * Is this too big?
 */

"use strict";

/**
 * square because symmetrical is easy 
*/
function setup() {
 createCanvas(600,600)
 colorMode(HSL)
}

/*
* User Sprite
*/

let sprite = {
    x: 250,
    y: 110,
    sizeX:10,
    sizeY:30,

    fill : {
        h: 260,
        s: 100,
        l: 50,
    },

    velocity: {
     vx: 0,
     vy: 1,
    },
   
    acceleration: {
     ax:0,
     ay:0.75 // downward acceleration as gravity
    }
}

//goal 
let goal = {x:250,y:420,size:30}

//maybe make platforms as objects rather than just design choices so I can explore collision?

/**
 * tbd
*/
function draw() {
    background(16,37,58)

    platform()
    lava()
    
    //draws sprite
    push()
    noStroke()
    fill(sprite.fill.h,sprite.fill.s,sprite.fill.l)
    rect(sprite.x,sprite.y,sprite.sizeX,sprite.sizeY)
    pop()
    
    

    //draws goal
    push()
    stroke(0)
    strokeWeight(2)
    ellipse(goal.x,goal.y,goal.size,50)
    pop()

   

    moveSprite()
    
    if (sprite.y>590){
        onLava()
    }
    if (dist(sprite.x,sprite.y,goal.x,goal.y)<=30){
        onGoal()
        sprite.acceleration.ay=0
        sprite.velocity.vy =0
    }

}

function platform(){
    push()
    fill(0)
    rect(width/2,height/4,width/2,20)
    rect(100,height/2,width/3,20)
    rect(width/3,3*height/4,width/3,20)
    pop()
}

function lava(){
    push()
    stroke(0)
    strokeWeight(2)
    fill(25,100,52)
    rect(0,580,width,20)
    pop()
}

function onLava(){
    fill(1,100,50)
    rect(0,250,width,100)
    fill(1,100,50,0.5)
    rect(0,0,width,height)
    push()
    textSize(50)
    //textAlign(center)
    fill(1,0,100)
    text("Game Over",width/3.5,320)
}

function onGoal(){
    fill(160,100,50)
    rect(0,250,width,100)
    fill(160,100,50,0.5)
    rect(0,0,width,height)
    push()
    textSize(50)
//textAlign(center)
    fill(1,0,100)
    text("You Win !",width/3,320)
}

function moveSprite(){
    sprite.x = constrain(sprite.x,5,595)
    sprite.y = constrain(sprite.y,5,595)

    sprite.velocity.vy += sprite.acceleration.ay;   // gravity speeds up the fall
    sprite.y += sprite.velocity.vy;
    if (keyIsDown(LEFT_ARROW)){
        sprite.x-=3
    } else if (keyIsDown(RIGHT_ARROW)){
        sprite.x+=3
    }
}