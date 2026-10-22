/**
 * Click Game
 * Yannick Hantaniaina
 *
 * Click the circle or press keys as many times as you can in 5 seconds. Your best score gets stored as the high score, then you can reset and try to beat it.
 */

"use strict";

/**
*basic 400x400 canvas
*/
function setup() {
    createCanvas(400,400)
    colorMode(HSL)
}

/**
 * the circle you click on
 */
let target = {
    x:200,
    y:180,
    size:150,
}

/**
 * reset button
 */
let resetButton = {
    x:200,
    y:340,
    size:60,
}

//scores and game state
let score = 0
let highScore = 0
let timeLeft = 5
let started = false
let timeUp = false

/**
 * draws the target, the reset button and the scores
*/
function draw() {
    background(200,50,90)

    //draws the target, goes grey when time is up
    push()
    noStroke()
    if (timeUp){
        fill(0,0,60)
    } else {
        fill(340,80,60)
    }
    ellipse(target.x,target.y,target.size)
    pop()

    //text on the target
    push()
    fill(0,0,100)
    textSize(20)
    textAlign(CENTER,CENTER)
    if (!started){
        text("Click to start !",target.x,target.y)
    } else if (timeUp){
        text("Time's up !",target.x,target.y)
    } else {
        text("CLICK !",target.x,target.y)
    }
    pop()

    //draws the reset button
    push()
    stroke(200,50,30)
    strokeWeight(3)
    fill(200,50,70)
    ellipse(resetButton.x,resetButton.y,resetButton.size)
    noStroke()
    fill(200,50,30)
    textSize(14)
    textAlign(CENTER,CENTER)
    text("Reset",resetButton.x,resetButton.y)
    pop()
    //score and high score at the top
    push()
    fill(200,50,30)
    textSize(20)
    textAlign(LEFT)
    text("Score: "+score,20,40)
    text("High Score: "+highScore,20,70)
    textAlign(RIGHT)
    text("Time: "+timeLeft,380,40)
    pop()
}

//clicking the target adds a point. reset only works once the time is up
function mousePressed(){
    if (dist(mouseX,mouseY,target.x,target.y)<=target.size/2){
        addPoint()
    }

    if (dist(mouseX,mouseY,resetButton.x,resetButton.y)<=resetButton.size/2 && timeUp){
        score = 0
        timeLeft = 5
        started = false
        timeUp = false
    }
}

//pressing any key also counts as a click
function keyPressed(){
    addPoint()
}

//adds a point while the round is on, the first one starts the timer
function addPoint(){
    if (!timeUp){
        if (!started){
            started = true
            setTimeout(countDown,1000)
        }
        score+=1
    }
}

//takes off a second each time it runs, ends the game at 0
function countDown(){
    timeLeft-=1
    if (timeLeft>0){
        setTimeout(countDown,1000) //recursive call to repeat the settimeout
    } else {
        endGame()
    }
}

//what happens when the timeout runs. stops the round and keeps the best score
function endGame(){
    timeUp = true
    if (score>highScore){
        highScore = score
        console.log("New high score:",highScore)
    }
}
