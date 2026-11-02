/**
 * Yannick Hantaniaina 
 * 
 * Avoid Meteor and the rocket moves with mouse. 
 * This time i try to import assets. 
 */

"use strict";

// Our rocket 
let rocket;
let meteor;
let startTime = 0;
const gameLength = 60;

// Starts the countdown from the current time
function startTimer(){
    startTime = millis();
}

// Returns the seconds left in the game, and stops at 0
function getTimeLeft(){
    let timePassed = (millis() - startTime) / 1000;
    return max(gameLength - timePassed, 0);
}

/**
 * Screen size depending on device. Sets Rocket to a set position to begin with and its image source. 
*/
async function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);

    rocket = {
        x: width/2,
        y: 4*(height/4),
        image: await loadImage('assets/images/rocket.png')
    };

    meteor = {
        x: random(0,width),
        y: 0,
        image: await loadImage('assets/images/meteor.png'),
        v: floor(random(0.5,2)),
        a: floor(random(0.05,0.5)),
        size: floor(random(150,200))
    };

    startTimer();
}



/**
 * Draws things 
*/
function draw() {
    background(0);
    drawRocket();

    moveMeteor();
    drawMeteor();

    drawTimer();
}

// Draws the seconds left in the top left corner
function drawTimer(){
    fill(0,0,100);
    textSize(32);
    text(ceil(getTimeLeft()), 20, 40);
}

// drawRocket function

function drawRocket(){
    image(rocket.image, mouseX-50, mouseY-50, 200,200);

}

//draw meteor function
function drawMeteor(){
    image(meteor.image, meteor.x, meteor.y, meteor.size,meteor.size);
}

//move meteor function

function moveMeteor(){
    meteor.y += meteor.v;
    meteor.v += meteor.a;
}