/**
 * Mini-platform Game
 * Yannick Hantaniaina
 *
 * A mini platformer where you move a little sprite with the left/right arrow keys.
 * Gravity pulls it down onto a platform, and you have to walk it to the goal to win.
 * If you fall off the platform into the lava, it's game over.
 *
 * original idea:
 * Maybe explore keyboard input as conditionals. A vertical level maze were the platforms act as barriers and if it falls and reaches an object it dies 
 * say explore dist(), a constant acceleration (gravity), a platform support that keeps the y constant, and a goal to win if you reach the end of the parcour 
 * also think of exploring keyboard input OR buttons for movement input. 
 * 
 * Is this too big? it was too big
 */

"use strict";

/**
 * creates a square canvas (square because symmetrical is easy) and switches to HSL colours
*/
function setup() {
    createCanvas(600, 600)
  
    colorMode(HSL)
}

/*
* User Sprite
* its position, size, colour, and the velocity/acceleration used for gravity
*/

let sprite = {
    x: 320,
    y: 110,
    sizeX: 10,
    sizeY: 30,

    fill: {
        h: 1,
        s: 0,
        l: 255,
    },

    velocity: {
        vx: 0,
        vy: 1,
    },

    acceleration: {
        ax: 0,
        ay: 0.75 // downward acceleration as gravity
    }
}

/**
 * Goal
 * the ellipse the sprite has to reach to win
 */
let goal = { x: 200, y: 290, size: 30 }

/**
* User Platform
* the platform the sprite stands on, stored as an object so its position can be used for collision
*/
let platform = {
    x: 600 / 4,
    y: 600 / 2,
    sizeX: 600 / 2,
    sizeY: 30
}

//maybe make platforms as objects rather than just design choices so I can explore collision?

/**
 * draws the scene, moves the sprite and checks if it's on the platform, in the lava or at the goal
*/
function draw() {
    //dark blue background
    background(242, 60, 25)

    //draws goal
    push()
    stroke(0)
    strokeWeight(2)

    ellipse(goal.x, goal.y, goal.size, 50)
    pop()

    //draws the platform and the lava
    build()
    lava()

    //draws sprite
    push()
    noStroke()
    fill(sprite.fill.h, sprite.fill.s, sprite.fill.l)
    rect(sprite.x, sprite.y, sprite.sizeX, sprite.sizeY)
    pop()


    //moves the sprite first, then checks if the platform should stop it
    moveSprite()
    onPlatform()

    //checks if the sprite fell in the lava
    if (sprite.y > 570) {
        onLava()
        //stops the sprite where it fell
        sprite.acceleration.vy = 0
        sprite.velocity.vy = 0

    }
    //checks if the sprite reached the goal
    if ((dist(sprite.x, sprite.y, goal.x, goal.y) <= 30)) {
        onGoal()
        //stops the sprite on the goal
        sprite.acceleration.ay = 0
        sprite.velocity.vy = 0
    }

}

/**
 * keeps the sprite on top of the platform, and turns gravity back on when it walks off an edge
*/
function onPlatform() {
    //sprite is between the platform edges and its bottom touches the platform -> stop falling
    if (((sprite.x < 455) && (sprite.x > 155)) && (sprite.y + sprite.sizeY > platform.y)) {
        //acceleration has to be 0 too, or gravity pulls it down again next frame
        sprite.acceleration.ay = 0
        sprite.velocity.vy = 0
    //sprite walked past either edge -> gravity is back
    } else if ((sprite.x > 455) || (sprite.x < 155)) {
        sprite.acceleration.ay = 1
        sprite.velocity.vy = 3
    }
}

/**
 * draws the platform from the platform object
*/
function build() {
    push()
    fill(0)
    rect(platform.x, platform.y, platform.sizeX, platform.sizeY)
    pop()
}

/**
 * draws the lava strip at the bottom of the canvas
*/
function lava() {
    push()
    stroke(0)
    strokeWeight(2)
    fill(25, 100, 52)
    rect(0, 580, width, 20)
    pop()
}

/**
 * game over screen when the sprite falls in the lava
*/
function onLava() {
    //red banner across the middle
    fill(1, 100, 50)
    rect(0, 250, width, 100)
    //see-through red over the whole screen
    fill(1, 100, 50, 0.5)
    rect(0, 0, width, height)
    //game over text
    push()
    textSize(50)
    //textAlign(center)
    fill(1, 0, 100)
    text("Game Over", width / 3.5, 320)
}

/**
 * win screen when the sprite reaches the goal
*/
function onGoal() {
    //green banner across the middle
    fill(160, 100, 50)
    rect(0, 250, width, 100)
    //see-through green over the whole screen
    fill(160, 100, 50, 0.5)
    rect(0, 0, width, height)
    //win text
    push()
    textSize(50)
    //textAlign(center)
    fill(1, 0, 100)
    text("You Win !", width / 3, 320)
}

/**
 * keeps the sprite on the canvas, applies gravity, and moves it left/right with the arrow keys
*/
function moveSprite() {
    //keeps the sprite inside the canvas
    sprite.x = constrain(sprite.x, 5, 595)
    sprite.y = constrain(sprite.y, 5, 595)

    sprite.velocity.vy += sprite.acceleration.ay;   // gravity speeds up the fall
    sprite.y += sprite.velocity.vy; // moves the sprite down by its velocity

    //arrow keys move the sprite left and right while held
    if (keyIsDown(LEFT_ARROW)) {
        sprite.x -= 3
    } else if (keyIsDown(RIGHT_ARROW)) {
        sprite.x += 3
    }
}